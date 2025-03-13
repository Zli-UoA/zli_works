import { Outlet } from "react-router";
import { Navbar } from "~/components/navbar";

export default () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
