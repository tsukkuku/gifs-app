import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { type FC } from "react";
import { LuSticker } from "react-icons/lu";
import { TbChartBarPopular } from "react-icons/tb";
import style from "./Sidebar.module.scss";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={isOpen ? style.sidebar : style.sidebarActive}
      onClick={(e) => e.stopPropagation()}
    >
      <ul className={style.sidebarButtons}>
        <li>
          <Link to={"/gifs-app"}>
            <FaSearch />
            Search
          </Link>
        </li>
        <li>
          <Link to={"/gifs-app/random"}>
            <GiPerspectiveDiceSixFacesRandom />
            Random
          </Link>
        </li>
        <li>
          <Link to={"/gifs-app/trends"}>
            <TbChartBarPopular />
            Popular
          </Link>
        </li>
        <li>
          <Link to={"/gifs-app/stickers"}>
            <LuSticker />
            Stickers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
