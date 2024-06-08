import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
