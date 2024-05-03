
import List from '../components/List.jsx'
import Proyectos from '../components/Proyectos.jsx'
function Home(props) {


  return (
    //*AQUI DEBERIA MOSTRAR LA LISTA DE LISTAS (los proyectos en los que estamos trabajando)
    <div id="contenedor">
      <Proyectos lista={props.lista} setLista={props.setLista}/>
    </div>
  )
}

export default Home