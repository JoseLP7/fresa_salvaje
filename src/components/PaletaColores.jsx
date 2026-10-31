import { useState } from "react";
import { usePaletaColores } from "./Servicios/usePaletaColores";

/*
  PaletaColores
  -------------
  El usuario elige un color de esmalte y la página le sugiere combinaciones
  usando una API gratuita (TheColorAPI). No necesita clave ni registro.

  Ejemplo de la petición que hacemos:
  https://www.thecolorapi.com/scheme?hex=FF69B4&mode=analogic&count=5
*/

// Tipos de combinación que ofrece la API (clave de la API -> texto para la usuaria)
const MODOS = {
    analogic: "Suave (colores vecinos)",
    complementary: "Contraste (opuesto)",
    triad: "Divertida (triada)",
    monochrome: "Tono sobre tono",
    quad: "Atrevida (cuádruple)",
};

function PaletaColores() {

    // ESTADOS: datos que, al cambiar, hacen que React vuelva a dibujar el componente
    const [color, setColor] = useState("#ff69b4");     // color elegido
    const [modo, setModo] = useState("analogic");      // tipo de combinación
    const [copiado, setCopiado] = useState("");        // último hex copiado
    const { colores, cargando, error } = usePaletaColores(color, modo);

    // Al hacer clic en una tarjeta, ese color pasa a ser el color base
    // y useEffect pide automáticamente una paleta nueva a la API.
    const explorar = (hex) => {
        setColor(hex.toLowerCase()); // <input type="color"> trabaja con minúsculas
    };

    // Copiar el código del color al portapapeles
    const copiar = async (hex) => {
        try {
            await navigator.clipboard.writeText(hex);
            setCopiado(hex);
            setTimeout(() => setCopiado(""), 1500);
        } catch {
            setCopiado("");
        }
    };

    return (
        <section className="bg-white py-16 px-6">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-pink-600 text-center">
                    Encuentra tu paleta 🎨
                </h2>

                <p className="text-gray-600 text-center mt-3 mb-10">
                    Elige el color de esmalte que te gusta y te sugerimos con qué combinarlo.
                </p>

                {/* CONTROLES */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">

                    <label className="flex items-center gap-3 text-gray-700 font-medium">
                        Tu color
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="w-14 h-14 rounded-full cursor-pointer border-4 border-pink-200 bg-transparent"
                        />
                    </label>

                    <label className="flex items-center gap-3 text-gray-700 font-medium">
                        Estilo
                        <select
                            value={modo}
                            onChange={(e) => setModo(e.target.value)}
                            className="border border-pink-300 rounded-full px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        >
                            {Object.entries(MODOS).map(([clave, texto]) => (
                                <option key={clave} value={clave}>{texto}</option>
                            ))}
                        </select>
                    </label>

                </div>

                <p className="text-center text-gray-500 text-sm -mt-4 mb-8">
                    Toca un color para explorar nuevas combinaciones a partir de él 👆
                </p>

                {/* ESTADOS: error / cargando / resultado */}
                {error && (
                    <p className="text-center text-pink-700 bg-pink-50 rounded-2xl py-4 px-6">
                        {error}
                    </p>
                )}

                {cargando && !error && (
                    <p className="text-center text-pink-500 animate-pulse">
                        Mezclando esmaltes… 💅
                    </p>
                )}

                {!error && colores.length > 0 && (
                    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 transition-opacity ${cargando ? "opacity-50" : "opacity-100"}`}>

                        {colores.map((c, indice) => (
                            <div
                                key={indice}
                                onClick={() => explorar(c.hex.value)}
                                title="Clic para explorar combinaciones con este color"
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition text-left cursor-pointer"
                            >
                                {/* Muestra del color con forma de uña */}
                                <div
                                    className="h-32 flex items-center justify-center"
                                    style={{ backgroundColor: c.hex.value }}
                                >
                                    <div className="w-10 h-16 rounded-t-full rounded-b-lg bg-white/30 border border-white/50" />
                                </div>

                                <div className="p-4">
                                    <p className="font-semibold text-pink-600 truncate">
                                        {c.name.value}
                                    </p>
                                    <p className="text-gray-500 text-sm mt-1">
                                        {c.hex.value}
                                    </p>

                                    {/* stopPropagation evita que este clic también "explore" el color */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            copiar(c.hex.value);
                                        }}
                                        className="mt-3 text-xs font-medium text-pink-600 border border-pink-300 rounded-full px-3 py-1 hover:bg-pink-50 transition"
                                    >
                                        {copiado === c.hex.value ? "¡Copiado! ✨" : "Copiar código"}
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                )}

                <p className="text-center text-gray-400 text-xs mt-8">
                    Combinaciones por TheColorAPI
                </p>

            </div>

        </section>
    );
}

export default PaletaColores;
