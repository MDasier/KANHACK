import { useParams } from "react-router-dom"
import toDoList from '../data/kanban.json'
import { Link } from "react-router-dom"

function ItemDetails() {
    const parametrosDinamicos = useParams()
    const itemEncontrado = toDoList.find((item)=> {
        return item.id === parametrosDinamicos.itemId
    })
  return (
    <div id="contenedor">{itemEncontrado===undefined? <h2>item no encontrado</h2>: (
        <div className='cards' style={{backgroundColor:itemEncontrado.status==="Done"?"green":itemEncontrado.status==="To Do"?"red":"orange"}}>
            <h2>{itemEncontrado.id}</h2>
            <h2>{itemEncontrado.title}</h2>
            <h2>{itemEncontrado.description}</h2>
            <h2>{itemEncontrado.assignee}</h2>
            <h2>{itemEncontrado.status}</h2>
            <h2>{itemEncontrado.priority}</h2>
            <h2>{itemEncontrado.createdDate}</h2>
            <h2>{itemEncontrado.dueDate}</h2>
            <Link to={"/"}><button>Atras Satanas</button></Link>
        </div>
    
    ) }</div>
  )
}

export default ItemDetails