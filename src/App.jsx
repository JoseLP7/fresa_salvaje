import Inicio from "./components/Inicio";
import Navegacion from "./components/MenuNav";
import Footer from "./components/Footer";


function App() {

  //estos son los datos simulados
  const itemsMenu = {
    titulo: "🍓 Fresa Salvaje",
    items1: "inicio",
    items2: "servicios",
    items3: "diseños",
    items4: "galería",
    items5: "contacto",
  };
  
  const itemsInicio = {
    tituloInicio: "Fresa Salvaje 🍓"
  }

  const itemsFooter = {
    tituloFooter: "🍓 Fresa Salvaje"
  }


  return (
    <>
      <Navegacion itemsMenu={itemsMenu} />

      <Inicio itemsInicio={itemsInicio}/>



      <Footer itemsFooter={itemsFooter} />
    </>
  );
}

export default App