import style from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={style.main}>{props.children}</main>
    </>
  );
};

export default Layout;
