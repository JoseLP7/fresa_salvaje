

import { useState } from "react";

function Calificacion() {

    // Estado 1: guardar la calificación
    const [calificacion, setCalificacion] = useState(0);

    // Estado 2: saber si ya calificó
    const [enviado, setEnviado] = useState(false);


    function sumar() {
        if (calificacion < 10) {
            setCalificacion(calificacion + 1);
        }
    }


    function restar() {
        if (calificacion > 0) {
            setCalificacion(calificacion - 1);
        }
    }


    function calificar() {
        setEnviado(true);
    }


    return (
        <section className="mx-auto my-10 max-w-md rounded-2xl bg-pink-50 p-8 text-center shadow-lg">

            <h2 className="mb-4 text-2xl font-bold text-pink-600">
                🍓 Califica tu experiencia
            </h2>

            {!enviado ? (

                <>
                    <p className="mb-6 text-gray-600">
                        ¿Qué calificación nos darías del 0 al 10?
                    </p>

                    <p className="mb-6 text-5xl font-bold text-pink-600">
                        {calificacion} / 10
                    </p>

                    <div className="mb-6 flex justify-center gap-4">

                        <button
                            onClick={restar}
                            className="rounded-lg bg-gray-200 px-6 py-3 font-bold hover:bg-gray-300"
                        >
                            -1
                        </button>

                        <button
                            onClick={sumar}
                            className="rounded-lg bg-pink-500 px-6 py-3 font-bold text-white hover:bg-pink-600"
                        >
                            +1
                        </button>

                    </div>

                    <button
                        onClick={calificar}
                        className="w-full rounded-lg bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700"
                    >
                        Calificar
                    </button>
                </>

            ) : (

                <div className="py-6">

                    <p className="mb-3 text-2xl font-bold text-pink-600">
                        ¡Muchas gracias! 💗
                    </p>

                    <p className="text-gray-600">
                        Tu calificación fue de {calificacion} sobre 10.
                    </p>

                </div>

            )}

        </section>
    );
}

export default Calificacion;
