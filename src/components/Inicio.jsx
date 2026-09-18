import Carrusel from "./Carrusel";
import Servicios from "./Servicios";
import Disenos from "./Disenos";
import Galeria from "./Galeria";
import Contacto from "./Contacto";

function Inicio() {
    return (
        <>
            {/* INICIO */}
            <section className="bg-pink-50 flex items-start justify-center py-10">

                <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

                    {/* Parte izquierda: bienvenida */}
                    <div className="w-full md:w-1/2 text-center md:text-left">

                        <h1 className="text-5xl font-bold text-pink-600">
                            Fresa Salvaje 🍓
                        </h1>

                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">
                            Uñas bonitas, creativas y hechas para ti.
                        </h2>

                        <p className="text-gray-600 text-lg mt-4 max-w-md">
                            Descubre diseños únicos y encuentra el estilo
                            perfecto para tus uñas.
                        </p>

                        
                        <a href="#disenos" className="block w-fit bg-pink-500 text-white px-6 py-3 rounded-full mt-6 hover:bg-pink-600 transition">
                            Ver diseños
                        </a>

                    </div>

                    {/* Parte derecha: carrusel */}
                    <div className="w-full md:w-1/2">
                        <Carrusel />
                    </div>

                </div>

            </section>

            {/* SERVICIOS */}
            <section id="servicios">
                <Servicios />
            </section>

            {/* DISEÑOS */}
            <section id="disenos">
                <Disenos />
            </section>

            {/* GALERÍA */}
            <section id="galeria">
                <Galeria />
            </section>

            <section id="contacto">
                <Contacto />
            </section>

        </>
    );
}

export default Inicio;