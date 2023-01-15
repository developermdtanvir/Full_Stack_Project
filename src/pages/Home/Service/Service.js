import React, { useEffect, useState } from 'react';
import './Service.css';
import { ServiceCard } from './ServiceCard';

export const Service = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className=' grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3'>
            {
                services.map(service => <ServiceCard service={service} />)
            }
        </div>
    )
}
