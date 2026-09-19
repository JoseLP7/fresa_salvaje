import { useState } from "react";

import galeria1 from "../assets/galeria/1.jpg";
import galeria2 from "../assets/galeria/2.jpg";
import galeria3 from "../assets/galeria/3.jpg";
import galeria4 from "../assets/galeria/4.jpg";

import frances1 from "../assets/disenos/frances/1.png";
import frances2 from "../assets/disenos/frances/2.png";
import frances3 from "../assets/disenos/frances/3.png";

import clasica1 from "../assets/disenos/clasica/1.png";
import clasica2 from "../assets/disenos/clasica/2.png";
import clasica3 from "../assets/disenos/clasica/3.png";

import creativo1 from "../assets/disenos/creativo/1.png";
import creativo2 from "../assets/disenos/creativo/2.png";
import creativo3 from "../assets/disenos/creativo/3.png";

function Galeria(props) {

    const [filtro, setFiltro] = useState("todas");

    const fotosGaleria = [
        { imagen: galeria1, categoria: "frances" },
        { imagen: galeria2, categoria: "clasicas" },
        { imagen: galeria3, categoria: "creativo" },
        { imagen: galeria4, categoria: "frances" }
    ];
    const fotosFrances = [
        { imagen: frances1, categoria: "frances" },
        { imagen: frances2, categoria: "frances" },
        { imagen: frances3, categoria: "frances" }
    ];

    const fotosClasicas = [
        { imagen: clasica1, categoria: "clasicas" },
        { imagen: clasica2, categoria: "clasicas" },
        { imagen: clasica3, categoria: "clasicas" }
    ];

    const fotosCreativas = [
        { imagen: creativo1, categoria: "creativo" },
        { imagen: creativo2, categoria: "creativo" },
        { imagen: creativo3, categoria: "creativo" }
    ];
    const todasLasFotos = [
        ...fotosGaleria,
        ...fotosFrances,
        ...fotosClasicas,
        ...fotosCreativas
    ];

    const fotosFiltradas = todasLasFotos.filter((foto) => {
        return filtro === "todas" || foto.categoria === filtro;
    });
    const nombreCategoria = (categoria) => {
        if (categoria === "frances") {
            return "Francés";
        }

        if (categoria === "clasicas") {
            return "Clásicas";
        }

        if (categoria === "creativo") {
            return "Creativo";
        }

        return "Diseño";
    };

    return (
        <section className="bg-pink-50 py-16 px-6">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-pink-600 text-center">
                    {props.itemsGaleria.tituloGaleria}
                </h2>

                <p className="text-gray-600 text-center mt-3 mb-8">
                    Explora nuestros diseños y trabajos.
                </p>

                <div className="flex justify-center gap-3 flex-wrap">

                    <button
                        onClick={() => setFiltro("todas")}
                        className={
                            filtro === "todas"
                                ? "bg-pink-700 text-white px-5 py-2 rounded-full"
                                : "bg-pink-500 text-white px-5 py-2 rounded-full"
                        }
                    >
                        TODAS
                    </button>

                    <button
                        onClick={() => setFiltro("frances")}
                        className={
                            filtro === "frances"
                                ? "bg-pink-700 text-white px-5 py-2 rounded-full"
                                : "bg-pink-500 text-white px-5 py-2 rounded-full"
                        }
                    >
                        FRANCÉS
                    </button>

                    <button
                        onClick={() => setFiltro("clasicas")}
                        className={
                            filtro === "clasicas"
                                ? "bg-pink-700 text-white px-5 py-2 rounded-full"
                                : "bg-pink-500 text-white px-5 py-2 rounded-full"
                        }
                    >
                        CLÁSICAS
                    </button>

                    <button
                        onClick={() => setFiltro("creativo")}
                        className={
                            filtro === "creativo"
                                ? "bg-pink-700 text-white px-5 py-2 rounded-full"
                                : "bg-pink-500 text-white px-5 py-2 rounded-full"
                        }
                    >
                        CREATIVO
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">

                        {fotosFiltradas.map((foto, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg"
                            >
                                <div className="relative">

                                    <img
                                        src={foto.imagen}
                                        alt={`Diseño ${index + 1}`}
                                        className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
                                    />

                                    <div className="absolute inset-0 bg-pink-600/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                        <p className="text-white text-2xl font-bold">
                                            {nombreCategoria(foto.categoria)}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}

                            </div>
                </div>

                </div>

        </section>
    );
}

export default Galeria;