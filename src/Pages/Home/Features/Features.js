import React, { useEffect, useState } from 'react';
import FeaturesItem from './FeaturesItem';

const Features = () => {
    const [features, setFeatures] = useState([])

    useEffect( ()=> {
        fetch('features.json')
        .then(res=> res.json())
        .then(data => setFeatures(data))
    },[])

    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-2xl text-orange-600'>Core Features</p>
                <h1 className='font-bold text-5xl py-5'>Why Choose Us</h1>
                <p className=''>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-6'>
                {/* {
                    features.map(feature => 
                    <FeaturesItem
                     key={feature._id} feature={feature}>
                    </FeaturesItem>)
                } */}
            </div>
        </div>
    );
};

export default Features;