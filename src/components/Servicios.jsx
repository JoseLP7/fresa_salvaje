function Servicios() {

    const servicios = [
        {
            nombre: "Esmaltado semipermanente",
            descripcion: "Tono básico o decoración personalizada para tu estilo.",
            precio: "Desde $34.999"
        },
        {
            nombre: "Forrado en acrílico",
            descripcion: "Refuerzo de la uña natural con acrílico.",
            precio: "$69.999"
        },
        {
            nombre: "Forrado en polygel",
            descripcion: "Refuerzo de la uña natural con polygel.",
            precio: "$69.999"
        },
        {
            nombre: "Dipping",
            descripcion: "Sistema de uñas con polvo acrílico.",
            precio: "$54.999"
        },
        {
            nombre: "Nivelación con Builder Gel",
            descripcion: "Nivelación y refuerzo de la uña natural.",
            precio: "$59.999"
        },
        {
            nombre: "Acrílicas esculpidas",
            descripcion: "Extensiones acrílicas con diseño personalizado.",
            precio: "$129.999"
        },
        {
            nombre: "Esculpidas polygel",
            descripcion: "Extensiones con polygel, ligeras y resistentes.",
            precio: "$109.999"
        },
        {
            nombre: "Press On",
            descripcion: "Uñas listas para usar y personalizadas.",
            precio: "$89.999"
        },
        {
            nombre: "Pedicure semipermanente",
            descripcion: "Cuidado de uñas y esmaltado semipermanente.",
            precio: "$34.999"
        },
        {
            nombre: "Pedicure tradicional",
            descripcion: "Cuidado y esmaltado tradicional.",
            precio: "$24.999"
        }
    ];

    return (
        <section className="bg-pink-50 py-16 px-6">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-pink-600 text-center">
                    Nuestros servicios 💅
                </h2>

                <p className="text-gray-600 text-center mt-3 mb-10">
                    Elige el servicio que mejor se adapte a tu estilo.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {servicios.map((servicio, indice) => (

                        <div
                            key={indice}
                            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition"
                        >

                            <div className="text-4xl mb-4">
                                💅
                            </div>

                            <h3 className="text-xl font-semibold text-pink-600">
                                {servicio.nombre}
                            </h3>

                            <p className="text-gray-600 mt-3">
                                {servicio.descripcion}
                            </p>

                            <p className="text-2xl font-bold text-pink-600 mt-5">
                                {servicio.precio}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Servicios;