import Header from "@/components/Header/Header";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
