import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { useState } from "react";


const Header = () => {

    return (
        <div className="bg-white shadow-lg flex">
            <div className="w-[80%] m-auto flex justify-between items-center py-6">
                <div className="font-semibold text-2xl">Gadget Heaven</div>
                <div className="space-x-5">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                </div>
                <div className="flex text-lg space-x-4">
                    <div className="flex items-center border p-1 h-9 justify-center  w-9 rounded-full relative"><IoCartOutline className="text-xl"/><span className="absolute -top-2 right-1 text-red-500 text-xs font-bold">0</span></div>
                    <div className="flex items-center border h-9 justify-center  w-9 rounded-full relative"><FaRegHeart className="text-lg"/> <p className="absolute -top-2 right-1 text-red-500 text-xs font-bold">0</p></div>


                </div>
            </div>

        </div>
    );
};

export default Header;