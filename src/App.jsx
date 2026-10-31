import { useState } from "react";

import Inicio from "./components/Inicio";
import Navegacion from "./components/MenuNav";
import Footer from "./components/Footer";
import Perfil from "./components/Perfil";



function App() {

  const [mostrarPerfil, setMostrarPerfil] = useState(false);


  // Estos son los datos simulados
  const itemsMenu = {
    titulo: "🍓 Fresa Salvaje",
    items1: "Inicio",
    items2: "Servicios",
    items3: "Diseños",
    items4: "Galería",
    items5: "Contacto",
    items6: "Mi Perfil",
  };


  const itemsInicio = {
    tituloInicio: "Fresa Salvaje 🍓"
  };


  const itemsFooter = {
    tituloFooter: "🍓 Fresa Salvaje"
  };


  return (
    <>

      <Navegacion
        itemsMenu={itemsMenu}
        setMostrarPerfil={setMostrarPerfil}
      />


      {mostrarPerfil ? (

        <Perfil />

      ) : (

        <>
          <Inicio itemsInicio={itemsInicio} />

        

          <Footer itemsFooter={itemsFooter} />
        </>

      )}

      
      
      

    </>
  );
}

export default App;