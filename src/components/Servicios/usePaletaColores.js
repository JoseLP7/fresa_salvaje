import { useEffect, useState } from "react";

export function usePaletaColores(color, modo) {
    const [colores, setColores] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const controlador = new AbortController();

        const obtenerPaleta = async () => {
            setCargando(true);
            setError("");

            try {
                const hex = color.replace("#", "");
                const url = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${modo}&count=5`;

                const respuesta = await fetch(url, { signal: controlador.signal });
                if (!respuesta.ok) {
                    throw new Error("La API respondió con un error");
                }

                const datos = await respuesta.json();
                setColores(datos.colors);
            } catch (e) {
                if (e.name !== "AbortError") {
                    setError("No pudimos cargar las combinaciones. Intenta de nuevo en un momento 🍓");
                }
            } finally {
                if (!controlador.signal.aborted) {
                    setCargando(false);
                }
            }
        };

        obtenerPaleta();

        return () => controlador.abort();
    }, [color, modo]);

    return { colores, cargando, error };
}
