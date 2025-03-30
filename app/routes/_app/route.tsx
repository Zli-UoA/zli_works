import { Outlet } from "react-router";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export default () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
