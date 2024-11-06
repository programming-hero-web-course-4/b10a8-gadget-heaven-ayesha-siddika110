/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({cart, handleRemovedata, handleWishListRemovedata}) => {
    const location = useLocation()
    // console.log(cart);
    const {product_title, price, product_image, product_id, Specification, availability, description
        , rating} = cart

    // const [showbox, setshowbox] = useState(true)
    // const deletbox =()=>{
    //     alert("operation succes")
    //     setshowbox(false)
    // }
 
    // console.log(items);
    
    
    return (
        <div className='w-[80%] flex items-center justify-between m-auto bg-white rounded-xl'>
            <div className='flex p-4 items-center space-x-4'>
                <img className='h-32 rounded-xl' src={product_image} alt="" />
                <div className='space-y-3'>
                    <h1 className='text-xl font-semibold'>{product_title}</h1>
                    <p className='text-gray-500'>{description}</p>
                    <p className='text-lg'>Price : {price}</p>

                </div>
            </div>
            
                <div onClick={()=>{handleRemovedata(product_id)}} className='mr-8 p-1 rounded-full text-red-700 border border-red-500 font-bold cursor-pointer'><AiOutlineClose /></div>
                
                
            
            
            
            
            
        </div>
    );
};

export default Cart;