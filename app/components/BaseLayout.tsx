import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
// import Navbar from "../../components/shared/navbar";
// import Footer from "../../components/shared/footer";
// import { RootLoader } from "./root-loader";
// import { CookiesProvider } from "react-cookie";

const BaseLayout = () => {
  return (
    <div>
      {/* <CookiesProvider defaultSetOptions={{ path: "/" }}> */}
      <div className=" min-h-screen  bg-[#f4f4f4]  ">
        <Navbar />
        <Outlet />
      </div>
      {/* </CookiesProvider> */}
    </div>
  );
};

export default BaseLayout;
