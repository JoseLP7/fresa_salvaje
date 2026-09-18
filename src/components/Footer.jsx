function Footer() {

  const mensaje =
    "Hola Fresa Salvaje, quisiera consultar disponibilidad para una cita.";

  const enlaceWhatsApp =
    `https://wa.me/573014099781?text=${encodeURIComponent(mensaje)}`;

  return (
    <footer className="bg-pink-600 text-white py-12 px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* Nombre */}
        <h2 className="text-4xl font-bold">
          🍓 Fresa Salvaje
        </h2>

        <p className="mt-3 text-pink-100 text-lg">
          Uñas bonitas, creativas y hechas para ti.
        </p>


        {/* Invitación */}
        <h3 className="text-2xl font-semibold mt-8">
          ¿Lista para tu próximo diseño? ✨
        </h3>


        {/* Botones redes */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-6">

          {/* WhatsApp */}
          <a
            href={enlaceWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
          >
            💬 Escríbenos por WhatsApp
          </a>


          {/* Instagram */}
          <a
            href="https://www.instagram.com/meli.vanegas/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
          >
            📸 Síguenos en Instagram
          </a>

        </div>


        {/* Enlaces internos */}
        <div className="flex justify-center flex-wrap gap-6 mt-10">

          <a
            href="#servicios"
            className="hover:text-pink-200 transition"
          >
            💅 Servicios
          </a>

          <a
            href="#disenos"
            className="hover:text-pink-200 transition"
          >
            ✨ Diseños
          </a>

          <a
            href="#galeria"
            className="hover:text-pink-200 transition"
          >
            📸 Galería
          </a>

          <a
            href="#contacto"
            className="hover:text-pink-200 transition"
          >
            📱 Contacto
          </a>

        </div>


        {/* Separador */}
        <div className="border-t border-pink-400 mt-10 pt-6">

          <p className="text-sm text-pink-100">
            © 2026 Fresa Salvaje. Todos los derechos reservados.
          </p>

          <p className="text-sm text-pink-200 mt-2">
            Hecho con 🍓 y mucho amor.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;