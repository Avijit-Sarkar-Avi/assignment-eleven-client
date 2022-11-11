import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('https://assignment-eleven-server-seven.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])





    return (
        <div>
            <div className='text-center'>
                <h1 className="text-5xl font-bold text-slate-500">Show Our Works
                    <br /> in Details</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>


                {
                    services.map(service => <ServiceCard
                        key={service.service_id}
                        service={service}
                    ></ServiceCard>)
                }


            </div>
            <Link to={'/allservices'}><button className="btn btn-warning m-20">See All</button></Link>
        </div>
    );
};

export default Services;