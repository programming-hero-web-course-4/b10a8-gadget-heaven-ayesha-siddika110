/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AllsigleCard = ({ category }) => {
    // console.log(category);
    const { product_title, price, product_image, product_id } = category || {}

    return (
        <div>
            <div className='bg-white p-5 rounded-2xl border shadow-md flex flex-col'>
                <div className='flex justify-center'>

                    <img className='h-[180px] rounded-xl object-cover' src={product_image} alt="" />
                </div>
                <div className='h-[150px] space-y-3 flex flex-col pt-1'>

                    <h1 className='font-semibold text-xl  '>{product_title}</h1>
                    <p className='font-semibold text-gray-400 flex-grow'>Price: {price}</p>
                    <Link to={`/details/${product_id}`} id={product_image}  className='text-[#9a35f8] text-center font-semibold py-2 px-4 rounded-3xl border-2 w-[130px] border-[#9a35f8] hover:bg-[#9a35f8] hover:text-white'>Details</Link>
                </div>
            </div>

        </div>
    );
};

export default AllsigleCard;