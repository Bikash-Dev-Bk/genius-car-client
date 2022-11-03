import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect( ()=> {
        fetch('services.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-2xl text-orange-600'>Service</p>
                <h1 className='font-bold text-5xl py-5'>Our Service Area</h1>
                <p className=''>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6'>
                {
                    services.map(service => 
                    <ServiceCard
                     key={service._id} service={service}>
                    </ServiceCard>)
                }

            </div>
        </div>
    );
};

export default Services;