import { Link, useSearchParams } from "react-router-dom";

function ListItem(props) {
  const {
    id,
    title,
    description,
    assignee,
    status,
    priority,
    createdDate,
    dueDate,
  } = props.eachItem;

  const [searchParams, setSearchParams] = useSearchParams();
  const urlId = searchParams.get("id");
  const moreDetails = () => {
    setSearchParams(id);
  };
  const borrarToDo = (index) => {
    const copiaLista = JSON.parse(JSON.stringify(props.lista));

    copiaLista.splice(index, 1);
    props.setLista(copiaLista);
  };

  return (
    <div key={id}>
      <div
        className="cards"
        style={{
          backgroundColor:
            status === "Done" ? "#EAFFE6" : status === "To Do" ? "#FFB3B3" : "#FFE7B3",
        }}
      >
        <>
          <p>{title}</p>
          <p>{status}</p>
          <p>{priority}</p>
          <p>{dueDate}</p>
          
          <Link to={`/listItem/${id}`}>
            <button
              onClick={() => {
                moreDetails;
              }}>
              More info
            </button>
          </Link>

          <button onClick={() => borrarToDo(props.index)}>Borrar</button>
        </>
      </div>
    </div>
  );
}

export default ListItem;
