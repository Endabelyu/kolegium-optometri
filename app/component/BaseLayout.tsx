import { Outlet } from "react-router";
// import Navbar from "../../components/shared/navbar";
// import Footer from "../../components/shared/footer";
// import { RootLoader } from "./root-loader";
// import { CookiesProvider } from "react-cookie";

const BaseLayout = () => {
  return (
    // <CookiesProvider defaultSetOptions={{ path: "/" }}>
    <div className=" min-h-screen  bg-[#f4f4f4]">
      <Outlet />
    </div>
    // </CookiesProvider>
  );
};

export default BaseLayout;
