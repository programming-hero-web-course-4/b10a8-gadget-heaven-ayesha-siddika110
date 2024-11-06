import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Content from './content';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { addToLocalStorage } from '../../utils/localStoreg';


const DetailsCategory = () => {
    const { detailId } = useParams()
    // console.log(product_id);
    // console.log(id);
    // console.log(detailId);
    const data = useLoaderData()
    // console.log(data);
    const [detail, setdetail] = useState([])
    // console.log(detail);
    const { product_title, price, product_image, product_id, Specification, availability, description
        , rating } = detail || {}





    useEffect(() => {
        const detailData = data.find(item => item.product_id === detailId);
        setdetail(detailData);

    }, [data, detailId])

    const handleToCartList = (id)=>{
        addToLocalStorage(id)
    }
    return (
        <div className='relative'>
            <div className='bg-[#9538E2] pt-14 pb-52'>

                <Content h={'Product Details'} p={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}></Content>
            </div>
            <div className='flex border relative -mt-40  flex-col lg:flex-row md:flex-row bg-[#ffffff6c] w-[90%] lg:w-[70%] m-auto rounded-2xl'>
                <div className='p-4 my-4 ml-4 bg-white flex items-center'><img className='w-[400px] ' src={product_image} alt="" /></div>
                <div className='bg-white my-4 mr-4 space-y-3 pt-5 p-4'>
                    <h1 className='text-2xl font-semibold'>{product_title}</h1>
                    <p className='font-bold text-lg'>Price: ${price}</p>
                    <button className={`py-1 px-2 rounded-lg ${availability ? 'border border-green-400 bg-green-200 text-green-800' : 'border border-red-400 bg-red-200 text-red-600'}`}>In Stock</button>
                    <p className='text-gray-500'>{description}</p>
                    <p className='font-bold'>Specification : </p>
                    
                        {/* {
                            Specification.map(item => (<li className='ml-8 text-gray-500' key={product_id}>{item}</li>))
                        }
                     */}
                    <p className='font-bold'>Rating :</p>
                    <div className='flex space-x-2'>

                        <div className='flex space-x-1 text-orange-300'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                        </div>
                        <p>{rating}</p>
                    </div>
                    <div className='flex space-x-3 '>

                    <Link onClick={()=> handleToCartList(detail)} className='bg-[#9538E2] text-white py-2 px-4 rounded-3xl font-medium'>Add to Cart</Link>
                    <Link className="flex bg-white text-black items-center border-2 h-9 justify-center  w-9 rounded-full relative cursor-pointer"><FaRegHeart className="text-lg" /> </Link>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default DetailsCategory;