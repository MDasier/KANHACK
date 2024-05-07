import { useParams } from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"

function ItemDetails(props) {
  const parametrosDinamicos = useParams()
  

  const itemEncontrado = props.lista.find((item)=> {
    return item.id === parametrosDinamicos.itemId
  })
  const [estado,setEstado]=useState(itemEncontrado.status)

  const handleStatus = (event) => {
    setEstado(event.target.value)
    itemEncontrado.status= event.target.value
  }    

  return (
  
  <div id="contenedor">
      {itemEncontrado===undefined? <h2>item no encontrado</h2>: (
        <div className='cards' style={{backgroundColor:estado==="Done"?"#EAFFE6":estado==="To Do"?"#FFB3B3":"#FFE7B3"}}>
            <h2>{itemEncontrado.id}</h2>
            <h2>{itemEncontrado.title}</h2>
            <h2>{itemEncontrado.description}</h2>
            <h2>{itemEncontrado.assignee}</h2>
            <h2> 
              {itemEncontrado.status==="Done"?<p>{itemEncontrado.status}</p>:<select onChange={handleStatus}>
                <option value={itemEncontrado.status}>{itemEncontrado.status}</option>
                <option value="To Do">TO DO</option>
                <option value="In Progress">IN PROGRESS</option>
                <option value="Done">DONE</option>
              </select>}
              
            </h2>
            <h2>{itemEncontrado.priority}</h2>
            <h2>{itemEncontrado.createdDate}</h2>
            <h2>{itemEncontrado.dueDate}</h2>
            <Link to={"/"}><button>Atrás</button></Link>
        </div>
    
    ) }</div>
  )
}

export default ItemDetails