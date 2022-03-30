import React from 'react';
import PricingOptio from '../PricingOption/PricingOptio';

const Pricing = () => {
    const priceOptions = [
        {id : 1, name: 'Free', price: 0, benefits: [
             'lifetime free',
             'unlmited deals',
             'localized deals',
             'Fantstic deals',
             'Crazy deals',
             'Everything on free'
        ]},
        {id : 2, name: 'Reguler', price: 9.99,  benefits: [
            'Everything on free',
            'lifetime free',
            'unlmited deals',
            'localized deals',
            'Fantstic deals',
            'Crazy deals'
       ] },
        {id : 3, name: 'Premium', price: 19.99,  benefits: [
            'Everything on free',
            'lifetime free',
            'unlmited deals',
            'localized deals',
            'Fantstic deals',
            'Crazy deals'
       ]}
    ]
    return (
        <div>
            <h1 className='bg-indigo-300 p-4 mt-8 font-momo text-white text-6xl'>Best deal of the town</h1>
            <p className='p-6 bg-indigo-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, autem tempora quibusdam atque quos cupiditate. In pariatur unde suscipit illo!</p>
            <div className='grid md:grid-cols-3 bg-indigo-300 p-10 gap-5'>
               {
                   priceOptions.map(option => <PricingOptio
                   option={option}
                   key= {option.id}
                   ></PricingOptio>)
               }
            </div>
        </div>
    );
};

export default Pricing;