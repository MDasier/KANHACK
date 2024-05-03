import toDoList from '../data/kanban.json'
import React, {useState} from "react"
import ListItem from './ListItem'

function List() {
  const [listaTodo , setlistaTodo ] = useState(toDoList)
    


  const borrarToDo=(index)=>{
    console.log(index)
    const copiaLista = JSON.parse( JSON.stringify( listaTodo ) )

    copiaLista.splice(index, 1)
    setlistaTodo(copiaLista)
  }
  
  return (
      
    <div id="home-main">
      {listaTodo.map((eachItem,index) => {
      return (        
        <div key={eachItem.id} >          
          <div >            
            
            <div className='cards'>
              <ListItem eachItem={eachItem} />
              <button onClick={() => borrarToDo(index)}>Borrar</button>
            </div>
            
          </div>
        </div>
        )})}  
    </div>
    )
  }

export default List