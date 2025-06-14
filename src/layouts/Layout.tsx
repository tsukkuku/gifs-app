import Header from "@/components/Header/Header";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header handleOpen={handleOpen} />
      {!isOpen && <div className={styles.overlay} onClick={handleOpen}></div>}
      <Sidebar isOpen={isOpen} />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
