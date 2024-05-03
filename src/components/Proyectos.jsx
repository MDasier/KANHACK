import listadoProyectos from '../data/listacopia.json'
import React, {useState} from "react"
import ListItem from './ListItem'
import { Link } from 'react-router-dom'

function Proyectos(props) {

    const borrarToDo=(index)=>{
        const copiaLista = JSON.parse( JSON.stringify( props.lista ) )
    
        copiaLista.splice(index, 1)
        props.setLista(copiaLista)
      }

  return (
    <div id="home-main">
      {props.lista.map((eachItem,index) => {
      return (        
        <div key={eachItem.id} >          
          <div >            
            
            <div className='cards'>
              <ListItem eachItem={eachItem} />
              <button onClick={() => borrarToDo(index)}>Borrar</button>
            </div>
            <Link to={"/form"}><button>FORMULARIO CREATE TASK</button></Link>
          </div>
        </div>
        )})}  
    </div>
  )
}

export default Proyectos