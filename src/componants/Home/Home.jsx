import { useLoaderData } from "react-router-dom";
import img from "../../assets/banner.jpg"
import Categories from "./Categories";
import { Helmet } from 'react-helmet';

const Home = () => {
    const datas = useLoaderData()
    // console.log(datas);
   
    
    return (
        <div>
            <Helmet>
                <title>Home - Gadget Heaven</title>
            </Helmet>
            <div className="-mt-52">
                <div className="flex justify-center items-center">

                <img className="w-[60%] bg-[#ffffff67] h-[450px] rounded-3xl object-cover  border p-3" src={img} alt="" />
                </div>

            </div>
            <h1 className="text-4xl font-semibold text-center pt-20 pb-10">Explore Cutting-Edge Gadgets</h1>
            
            <Categories datas={datas}></Categories>
            
        </div>
    );
};

export default Home;