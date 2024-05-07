import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div id="side-main">
      <Link to={"/form"}>
        <section>AÑADIR TAREA</section>
      </Link>
      <Link to={"/about"}>
      <section>About</section>
      </Link>
      <section>FUNCION 3</section>
    </div>
  );
}

export default SideBar;
