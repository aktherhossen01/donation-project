import { Outlet } from "react-router-dom";
import Navbar from "../../component/Header/Navbar/Navbar";
import Banner from "../../component/Header/Banner/Banner";


const MainLayout = () => {
    return (
        <div className="container mx-auto ">
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;