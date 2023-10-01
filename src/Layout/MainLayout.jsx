import { Outlet } from "react-router-dom";
import Navbar from "../Pages/NavBar/Navbar";
import Footer from "../Pages/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;