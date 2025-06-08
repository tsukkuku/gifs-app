import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import Button from "../ui/Button/Button";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <h1>Gif App</h1>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li>
            <Button onClick={() => navigate("/search")}>Search</Button>
          </li>
          <li>
            <Button onClick={() => navigate("/")}>Trends</Button>
          </li>
          <li>
            <Button onClick={() => navigate("/random")}>Random</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
