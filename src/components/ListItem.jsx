import { Link, useSearchParams } from "react-router-dom"
import toDoList from '../data/kanban.json'



function ListItem(props) {
    console.log(props)
    const {id, title, description, assignee, status, priority, createdDate, dueDate} = props.eachItem

    const[searchParams, setSearchParams] = useSearchParams()
    const urlId = searchParams.get("id")
    const moreDetails= () => {setSearchParams(id)}

    

    const [listaTodo , setlistaTodo ] = useState(toDoList)
    


    const borrarToDo=(id)=>{
      const copiaLista = JSON.parse( JSON.stringify( listaTodo ) )
  
      copiaLista.splice(index, 1)
      setlistaTodo(copiaLista)
    }

  return (
                   
            <div key={id} >          
                    <div className='cards' style={{backgroundColor:status==="Done"?"green":status==="To Do"?"red":"orange"}}>
                        <>
                            
                            <p>{title}</p>
                            <p>{description}</p>
                            
                            <p>{status}</p>
                            <p>{priority}</p>
                            
                            <p>{dueDate}</p>
                            <Link to={`/listItem/${id}`}><button onClick={()=>{moreDetails}}>More info</button></Link>
                        </>
                        
                    </div>
            </div>
            
  )
}

export default ListItem

