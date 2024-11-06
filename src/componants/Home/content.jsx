/* eslint-disable react/prop-types */
// import React from 'react';

const Content = ({h, p}) => {
    return (
        <div className="space-y-3 text-white">
            <h1 className="font-semibold text-3xl text-center">{h}</h1>
            <p className="text-gray-200 text-center">{p}</p>

            
        </div>
    );
};

export default Content;