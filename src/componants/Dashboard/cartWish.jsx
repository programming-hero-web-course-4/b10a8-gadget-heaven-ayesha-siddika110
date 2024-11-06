import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const CartWish = ({cart, handleWishListRemovedata}) => {
    const {product_title, price, product_image, product_id, Specification, availability, description
        , rating} = cart
    return (
        <div>
            <div className='w-[80%] flex items-center justify-between m-auto bg-white rounded-xl'>
            <div className='flex p-4 items-center space-x-4'>
                <img className='h-32 rounded-xl' src={product_image} alt="" />
                <div className='space-y-3'>
                    <h1 className='text-xl font-semibold'>{product_title}</h1>
                    <p className='text-gray-500'>{description}</p>
                    <p className='text-lg'>Price : {price}</p>

                </div>
            </div>
            
                <div onClick={()=>{handleWishListRemovedata(product_id)}} className='mr-8 p-1 rounded-full text-red-700 border border-red-500 font-bold cursor-pointer'><AiOutlineClose /></div>
                
                
            
            
            
            
            
        </div>
            
        </div>
    );
};

export default CartWish;