import { useState } from "react";

import unas1 from "../assets/trabajos/unas1.JPG";
import unas2 from "../assets/trabajos/unas2.jpg";
import unas3 from "../assets/trabajos/unas3.PNG";
import unas4 from "../assets/trabajos/unas4.PNG";
import unas5 from "../assets/trabajos/unas5.JPG";

function Carrusel(props) {

    const fotos = [unas1, unas2, unas3, unas4, unas5];

    const [indice, setIndice] = useState(0);

    function anterior() {
        if (indice === 0) {
            setIndice(fotos.length - 1);
        } else {
            setIndice(indice - 1);
        }
    }

    function siguiente() {
        if (indice === fotos.length - 1) {
            setIndice(0);
        } else {
            setIndice(indice + 1);
        }
    }

    return (
        <div className="w-full max-w-3xl mx-auto mt-10">

            <h2 className="text-3xl font-bold text-pink-600 mb-6">
                {props.itemsCarrusel.tituloCarrusel},
            </h2>

            <div className="relative flex items-center justify-center">

                <button
                    onClick={anterior}
                    className="absolute left-3 z-10 bg-white/90 text-pink-600 w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
                >
                    <span className="text-2xl">‹</span>
                </button>

                <img
                    src={fotos[indice]}
                    alt={`Diseño de uñas ${indice + 1}`}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />

                <button
                    onClick={siguiente}
                    className="absolute right-3 z-10 bg-white/90 text-pink-600 w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
                >
                    <span className="text-2xl">›</span>
                </button>

            </div>

            <div className="flex justify-center gap-2 mt-4">

                {fotos.map((foto, posicion) => (
                    <button
                        key={posicion}
                        onClick={() => setIndice(posicion)}
                        className={`w-3 h-3 rounded-full ${indice === posicion
                                ? "bg-pink-600"
                                : "bg-pink-300"
                            }`}
                    >
                    </button>
                ))}

            </div>

        </div>
    );
}

export default Carrusel;