import React from 'react';

const PricingOptio = (props) => {
    const {name, price} = props.option
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 p-2 rounded text-xl font-bold'>{name}</h2>
            <p><small className='text-5xl font-bold'>{price}</small>
            <span className='text-xl font-bold text-gray-500'>/mo</span></p>
            
        </div>
    );
};

export default PricingOptio;