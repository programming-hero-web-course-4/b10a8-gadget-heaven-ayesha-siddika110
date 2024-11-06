import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../../index.css"
import { Toaster } from 'react-hot-toast';


const Root = () => {
    return (
        <div className="font-sora bg-red-50">
            <Toaster></Toaster>
                <Header></Header>
                <div className="min-h-[calc(100vh-440px)]">

                <Outlet></Outlet>
                </div>
                <Footer></Footer>
        </div>
    );
};

export default Root;