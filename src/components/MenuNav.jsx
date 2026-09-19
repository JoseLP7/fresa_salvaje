import { useState } from "react";

function Navegacion(props) {


  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-pink-50/90 backdrop-blur-md px-8 py-4 z-[9999] shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">

        {/* Logo / Nombre */}
        <a href ="" className="text-2xl font-bold text-pink-600 flex items-center gap-2">
          {props.itemsMenu.titulo}
        </a>

        {/* Menú */}
        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="md:hidden text-3xl text-pink-600"
        >
          ☰
        </button>
        <ul
          className={`${menuAbierto ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-4 md:gap-6 text-gray-700 font-medium absolute md:static top-full left-0 w-full md:w-auto bg-pink-50 md:bg-transparent p-6 md:p-0 shadow-md md:shadow-none`}
        >
          <li>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors"
            >
              {props.itemsMenu.items1}
            </a>
          </li>

          <li>
            <a
              href="#servicios"
              className="hover:text-pink-500 transition-colors"
            >
              {props.itemsMenu.items2}
            </a>
          </li>

          <li>
            <a
              href="#disenos"
              className="hover:text-pink-500 transition-colors"
            >
              {props.itemsMenu.items3}
            </a>
          </li>

          <li>
            <a
              href="#galeria"
              className="hover:text-pink-500 transition-colors"
            >
              {props.itemsMenu.items4}
            </a>
          </li>

          <li>
            <a
              href="#contacto"
              className="hover:text-pink-500 transition-colors"
            >
              {props.itemsMenu.items5}
            </a>
          </li>
        </ul>

      </div>
    </nav >
  );
}

export default Navegacion;