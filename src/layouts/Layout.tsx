import Header from "@/components/Header/Header";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
