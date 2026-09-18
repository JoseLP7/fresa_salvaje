import frances1 from "../assets/disenos/frances/1.png";
import frances2 from "../assets/disenos/frances/2.png";
import frances3 from "../assets/disenos/frances/3.png";

import clasica1 from "../assets/disenos/clasica/1.png";
import clasica2 from "../assets/disenos/clasica/2.png";
import clasica3 from "../assets/disenos/clasica/3.png";

import creativo1 from "../assets/disenos/creativo/1.png";
import creativo2 from "../assets/disenos/creativo/2.png";
import creativo3 from "../assets/disenos/creativo/3.png";

function Disenos() {

  const fotosFrances = [
    frances1,
    frances2,
    frances3
  ];

  const fotosClasicas = [
    clasica1,
    clasica2,
    clasica3
  ];

  const fotosCreativas = [
    creativo1,
    creativo2,
    creativo3
  ];

    return (
    <section className="bg-pink-50 py-16 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-pink-600 text-center">
          Nuestros diseños ✨
        </h2>

        <p className="text-gray-600 text-center mt-3 mb-10">
          Elige el estilo que más te guste.
        </p>

        {/* DISEÑO FRANCÉS */}
        <h3 className="text-3xl font-bold text-pink-600 text-center mb-6">
          Diseño Francés 💅
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

          {fotosFrances.map((foto, indice) => (

            <div
              key={indice}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition"
            >

              <img
                src={foto}
                alt={`Diseño francés ${indice + 1}`}
                className="w-full h-80 object-cover"
              />

            </div>

          ))}

        </div>


        {/* DECORACIÓN CLÁSICA */}
        <h3 className="text-3xl font-bold text-pink-600 text-center mb-6">
          Decoración Clásica ✨
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

          {fotosClasicas.map((foto, indice) => (

            <div
              key={indice}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition"
            >

              <img
                src={foto}
                alt={`Decoración clásica ${indice + 1}`}
                className="w-full h-80 object-cover"
              />

            </div>

          ))}

        </div>


        {/* DISEÑO CREATIVO */}
        <h3 className="text-3xl font-bold text-pink-600 text-center mb-6">
          Diseño Creativo 🎨
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {fotosCreativas.map((foto, indice) => (

            <div
              key={indice}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition"
            >

              <img
                src={foto}
                alt={`Diseño creativo ${indice + 1}`}
                className="w-full h-80 object-cover"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Disenos;