import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import Button from "../ui/Button/Button";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.headerName}>
        <h1>Gif App</h1>
        <Button
          variant="primary"
          onClick={() => navigate("/favorites")}
          startContent={<FaHeart />}
        >
          Favorites
        </Button>
      </div>
    </header>
  );
};

export default Header;
