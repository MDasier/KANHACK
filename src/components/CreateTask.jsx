import React from 'react'

function CreateTask(props) {
  const nuevaTarea = {
    id: countId,
    title: `comprobar${countId}`,
    description: ".",
    assignee: "Equipo Genios del mal",
    status: "Done",
    priority: "High",
    createdDate: "2023-09-17",
    dueDate: "2023-09-25"
  }
    const handleSubmit = (event) => {
        event.preventDefault()
        countId++
        props.setLista((lista)=>{
          return [...lista, nuevaTarea]
        })
    }

  return (
    <div id="contenedor">
        <div className='form'>
        <form onSubmit={handleSubmit}>
            <label>Titulo: <input type='text' placeholder='que tienes que hacer...'></input></label>
            <label>Descripción: <input type='text' placeholder='descripcion de tarea'></input></label>
            <label>Estado: <input type='tel' placeholder='en que estado se encuentra la tarea'></input></label>
            <label>Prioridad: <input type='text' placeholder='prioridad'></input></label>
            <button type='submit'>AÑADIR</button>
        </form>
        </div>
    </div>
  )
}

export default CreateTask