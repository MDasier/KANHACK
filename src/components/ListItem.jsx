
function ListItem(props) {
    console.log(props)
    const {id, title, description, assignee, status, priority, createdDate, dueDate} = props.eachItem
  return (
                   
            <div key={id} >          
                    <div className='cards' style={{backgroundColor:status==="Done"?"green":status==="To Do"?"red":"orange"}}>
                        <div>
                            <p>{id}</p>
                            <p>{title}</p>
                            <p>{description}</p>
                            <p>{assignee}</p>
                            <p>{status}</p>
                            <p>{priority}</p>
                            <p>{createdDate}</p>
                            <p>{dueDate}</p>
                        </div>
                        
                    </div>
            </div>
            
  )
}

export default ListItem

