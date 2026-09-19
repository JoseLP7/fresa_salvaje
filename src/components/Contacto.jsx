import { useState } from "react";

function Contacto(props) {

    const [servicio, setServicio] = useState("");

    const servicios = [
        "Esmaltado semipermanente",
        "Forrado en acrílico",
        "Forrado en polygel",
        "Dipping",
        "Nivelación con Builder Gel",
        "Acrílicas esculpidas",
        "Esculpidas polygel",
        "Press On",
        "Pedicure semipermanente",
        "Pedicure tradicional"
    ];
    const mensaje = servicio
        ? `Hola Fresa Salvaje 🍓, quisiera consultar disponibilidad para ${servicio}.`
        : "Hola Fresa Salvaje 🍓, quisiera consultar disponibilidad para una cita.";

        const enlaceWhatsApp =
    `https://wa.me/573014099781?text=${encodeURIComponent(mensaje)}`;

    return (
        <section  className="bg-white py-16 px-6">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-pink-600 text-center">
                    {props.itemsContacto.tituloContacto}
                </h2>

                <p className="text-gray-600 text-center mt-3">
                    Estamos listas para crear el diseño perfecto para ti. ✨
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">

                    {servicios.map((nombreServicio) => (

                        <button
                            key={nombreServicio}
                            onClick={() => setServicio(nombreServicio)}
                            className={`p-4 rounded-2xl border-2 transition ${servicio === nombreServicio
                                ? "bg-pink-500 text-white border-pink-500"
                                : "bg-pink-50 text-pink-600 border-pink-200 hover:bg-pink-100"
                                }`}
                        >
                            💅 {nombreServicio}
                        </button>

                    ))}

                </div>
                <div className="text-center mt-10">

                    <p className="text-gray-600 mb-4">
                        ¿Ya elegiste tu servicio?
                    </p>

                    <a
                        href={enlaceWhatsApp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-pink-600 hover:scale-105 transition"
                    >
                        💬 Consultar disponibilidad por WhatsApp
                    </a>

                </div>

            </div>

        </section>
    );
}

export default Contacto;