import React from "react";
import { useState } from "react";
function CreateTask(props) {
  let countId = props.lista.length + 1;
    const [title, settitle] = useState(`Titulo${countId}`);
    const [description, setdescription] = useState("");
    const [assignee, setassignee] = useState("");
    const [status, setstatus] = useState("To Do");
    const [priority, setpriority] = useState("");
    const [createdDate, setcreatedDate] = useState("2023-09-17");
    const [dueDate, setdueDate] = useState("2023-09-25");
    const handletitle = (event) => {settitle(event.target.value.toUpperCase())}
    const handledescription = (event) => {setdescription(event.target.value)}
    const handleassignee = (event) => {setassignee(event.target.value)}
    const handlestatus = (event) => {setstatus(event.target.value)}
    const handlepriority = (event) => {setpriority(event.target.value)}
    const handlecreatedDate = (event) => {setcreatedDate(event.target.value)}
    const handledueDate = (event) => {setdueDate(event.target.checked)}

  const nuevaTarea = {
    id: countId,
    title: title,
    description: description,
    assignee: assignee,
    status: status,
    priority: priority,
    createdDate: createdDate,
    dueDate: dueDate,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    countId++;
    props.setLista((lista) => {
      return [...lista, nuevaTarea];
    });
  };

  return (
    <div id="contenedor">
      <div id="home-main">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>
              title: <input type="text" placeholder="title"  onChange={handletitle}></input>
            </label>
            <label>
              description: <input type="text" placeholder="description"  onChange={handledescription}></input>
            </label>
            <label>
              assignee: <input type="text" placeholder="assignee"  onChange={handleassignee}></input>
            </label>
            <label>
              status: <select name="status" onChange={handlestatus}>
              <option value="To Do">Estado de la tarea</option>
              <option value="To Do">TO DO</option>
              <option value="In Progress">IN PROGRESS</option>
            </select>
            </label>
            <label>
              priority: <input type="text" placeholder="priority"  onChange={handlepriority}></input>
            </label>
            <label>
              createdDate: <input type="text" placeholder="createdDate"  onChange={handlecreatedDate}></input>
            </label>
            <label>
              dueDate: <input type="text" placeholder="dueDate"  onChange={handledueDate}></input>
            </label>

            <button type="submit">AÑADIR</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
