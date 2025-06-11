import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import Button from "../ui/Button/Button";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.headerName}>
        <h1>Gif App</h1>
        <Button
          variant="primary"
          onClick={() => navigate("/favorites")}
          startContent="https://img.icons8.com/?size=100&id=10287&format=png&color=FFFFFF"
        >
          Favorites
        </Button>
      </div>
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
