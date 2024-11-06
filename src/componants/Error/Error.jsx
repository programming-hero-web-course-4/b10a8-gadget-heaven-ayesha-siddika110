import React from 'react';
import errorimg from '../../assets/error-page.gif'

const Error = () => {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            
            <img src={errorimg} alt="" />
            <h1 className='text-5xl font-semibold text-gray-500'>You are going wrong root</h1>
        </div>
    );
};

export default Error;