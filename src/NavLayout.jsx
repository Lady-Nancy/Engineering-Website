import Nav from "./component/nav.jsx";
import Home from "./component/home.jsx"
import { Outlet } from "react-router-dom";

const NavLayout = () => {
  return (
    <>
      <Nav />
      <Home />
      <Outlet />
    </>
  );
};

export default NavLayout;
