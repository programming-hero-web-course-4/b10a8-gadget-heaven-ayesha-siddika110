import React from 'react';
import { AiOutlineAlibaba } from "react-icons/ai";
import darax from "../../assets/daraz.jpg"
import sopify from "../../assets/sopify.png"
import alibaba from "../../assets/alibaba.jpg"


const Sponson = () => {
    return (
        <div className='flex justify-center items-center space-x-7 my-32'>
            <div className='w-[200px] border-2 bg-white'>
                <img className='bg-white'  src={darax} alt="" />
            </div>
            <div className='w-[200px] border-2 bg-white'>
                <img className='bg-white object-cover py-1'  src={alibaba} alt="" />
            </div>
            <div className='w-[200px] border-2 bg-white'>
                <img className='bg-white object-cover py-5'  src={sopify} alt="" />
            </div>
            
           

           
  
        </div >
    );
};

export default Sponson;