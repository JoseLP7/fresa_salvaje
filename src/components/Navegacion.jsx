function Navegacion() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-pink-50/90 backdrop-blur-md px-8 py-4 z-[9999] shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo / Nombre */}
        <h1 className="text-2xl font-bold text-pink-600 flex items-center gap-2">
          🍓 Fresa Salvaje
        </h1>

        {/* Menú */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-pink-500 transition-colors">
              Inicio
            </a>
          </li>
          <li>
            <a href="#servicios" className="hover:text-pink-500 transition-colors">
              Servicios
            </a>
          </li>
          <li>
            <a href="#disenos" className="hover:text-pink-500 transition-colors">
              Diseños
            </a>
          </li>
          <li>
            <a href="#galeria" className="hover:text-pink-500 transition-colors">
              Galería
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-pink-500 transition-colors">
              Contacto
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navegacion;