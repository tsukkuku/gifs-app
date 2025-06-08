import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Gif App</h1>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li>
            <Link to={"/search"}>Search</Link>
          </li>
          <li>
            <Link to={"/"}>Trends</Link>
          </li>
          <li>
            <Link to={"/random"}>Random</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
