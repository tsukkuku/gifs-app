import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";
import { FaSearch } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { useState } from "react";
import Button from "../ui/Button/Button";
import { LuSticker } from "react-icons/lu";
import { TbChartBarPopular } from "react-icons/tb";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? style.sidebar : style.sidebarFalse}>
      <Button onClick={handleOpen} className={isOpen ? "" : style.closedButton}>
        &larr;
      </Button>
      <ul className={style.sidebarButtons}>
        <li>
          <Link to={"/"}>
            <TbChartBarPopular />
            Popular
          </Link>
        </li>
        <li>
          <Link to={"/random"}>
            <GiPerspectiveDiceSixFacesRandom />
            Random
          </Link>
        </li>
        <li>
          <Link to={"/search"}>
            <FaSearch />
            Search
          </Link>
        </li>
        <li>
          <Link to={"/stickers"}>
            <LuSticker />
            Stickers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
