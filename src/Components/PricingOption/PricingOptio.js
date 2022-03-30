import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benifit from '../Benifit/Benifit';


const PricingOptio = (props) => {
    const { name, price , benefits} = props.option
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 p-2 rounded text-xl font-bold'>{name}</h2>
            <p><small className='text-5xl font-bold'>{price}</small>
                <span className='text-xl font-bold text-gray-500'>/mo</span></p>

            <div>
                <h3 className='text-xl text-left'> Benefits: </h3>
               {
                   benefits.map(benefit=><Benifit
                   benefit={benefit}
                   ></Benifit>)
               }
               <button className = 'bg-green-300 flex justify-center mt-5 p-2 gap-3 rounded w-full  hover:bg-green-700 text-white items-center'>Buy Now <ArrowRightIcon className='w-4 h-4'></ArrowRightIcon></button>
            </div>
        </div>
    );
};

export default PricingOptio;