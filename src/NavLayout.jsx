import Nav from "./component/nav.jsx";
import { Outlet } from "react-router-dom";

const NavLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default NavLayout;
