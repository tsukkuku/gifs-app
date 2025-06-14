import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import Button from "../ui/Button/Button";
import { FaHeart } from "react-icons/fa";
import type { FC } from "react";
import { IoMdMenu } from "react-icons/io";

interface HeaderProps {
  handleOpen: () => void;
}

const Header: FC<HeaderProps> = ({ handleOpen }) => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.headerName}>
        <Link to={"/"}>Gif App</Link>

        <div className={styles.buttons}>
          <Button onClick={handleOpen} className={styles.buttonSidebar}>
            <IoMdMenu />
          </Button>
          <Button
            variant="primary"
            onClick={() => navigate("/favorites")}
            startContent={<FaHeart />}
          >
            Favorites
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
