import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div id="side-main">
      <Link to={"/form"}>
        <section>AÑADIR TAREA</section>
      </Link>
      <Link to={"/about"}>
      <section>ABOUT</section>
      </Link>
      <Link to={"/patata-video"}>
      <section>FUNCION PATATIL</section>
      </Link>
    </div>
  );
}

export default SideBar;
