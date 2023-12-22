import style from "../css/nav.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className={style.nav}>
      <Link to="/">HOME</Link>
      <Link to="/create">CREAR PERSONAJE</Link>
    </nav>
  );
}
