import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getStorageToCartList, getStorageToWishList } from "../../utils/localStoreg";



const Header = () => {
    let location = useLocation();
    const [leng,setLeng] = useState(0)
    useEffect(() => {
        const dataCart = getStorageToCartList()
        const dataleng = dataCart.length
        setLeng(dataleng);
        


    })
    const [lengwish,setLengwish] = useState(0)
    useEffect(() => {
        const dataCart = getStorageToWishList()
        const dataleng = dataCart.length
        setLengwish(dataleng);
        


    })

    return (
        <div>

            {
                location.pathname === '/' || location.pathname === '/category/All' || location.pathname === '/category/Laptop' || location.pathname === '/category/Phones' || location.pathname === '/category/Accessories' || location.pathname === '/category/Smart%20Watches' || location.pathname === '/category/Mac%20Book' || location.pathname === '/category/iPad' ?
                    <div className=" text-white shadow-lg m-6 rounded-xl border">
                        <div className="m-3 bg-[#9538E2] rounded-xl">

                            <div className="w-[80%] m-auto flex flex-col lg:flex-row space-y-0 gap-5 justify-between items-center py-6">
                                <div className="font-semibold text-2xl">Gadget Heaven</div>
                                <div className="space-x-5">
                                    <NavLink to='/'>Home</NavLink>
                                    <NavLink to='/statistics'>Statistics</NavLink>
                                    <NavLink to='/dashboard'>Dashboard</NavLink>
                                    <NavLink to='/sponsord'>Sponsor</NavLink>
                                </div>
                                <div className="flex text-lg space-x-4">
                                    <div className="bg-white text-black flex items-center border p-1 h-9 justify-center  w-9 rounded-full relative"><IoCartOutline className="text-xl" /><span className="absolute -top-2 -right-1 text-white text-xs font-bold">{leng}</span></div>
                                    <div className="flex bg-white text-black items-center border h-9 justify-center  w-9 rounded-full relative"><FaRegHeart className="text-lg" /> <p className="absolute -top-2 -right-1 text-white text-xs font-bold">{lengwish}</p></div>


                                </div>
                            </div>
                            <div className="flex pb-52 space-y-3 flex-col justify-center items-center py-20">
                                <h1 className="text-5xl font-semibold text-center leading-tight">Upgrade Your Tech Accessorize with <br></br>Gadget Heaven Accessories</h1>
                                <p className="text-gray-300">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                                </p>
                                <Link to={`/dashboard`} className="py-2 px-4 bg-white text-[#9538E2] font-semibold rounded-3xl">Shop Now</Link>
                            </div>
                        </div> </div> :
                    <div className=" bg-white">
                        <div className="w-[80%] m-auto flex-col lg:flex-row space-y-0 gap-5 flex justify-between items-center py-6">
                            <div className="font-semibold text-black text-2xl">Gadget Heaven</div>
                            <div className="space-x-5 text-black">
                                <NavLink to='/' className={``}>Home</NavLink>
                                <NavLink to='/statistics'>Statistics</NavLink>
                                <NavLink to='/dashboard'>Dashboard</NavLink>
                                <NavLink to='/sponsord'>Sponsor</NavLink>
                            </div>
                            <div className="flex text-lg space-x-4">
                                <div className="bg-white text-black flex items-center border p-1 h-9 justify-center  w-9 rounded-full relative"><IoCartOutline className="text-xl" /><span className="absolute -top-2 -right-1 text-[#9538E2] text-xs font-bold">{leng}</span></div>
                                <div className="flex bg-white text-black items-center border h-9 justify-center  w-9 rounded-full relative"><FaRegHeart className="text-lg" /> <p className="absolute -top-2 -right-1 text-[#9538E2] text-xs font-bold">{lengwish}</p></div>


                            </div>
                        </div>
                    </div>
            }


        </div>
    );
};

export default Header;