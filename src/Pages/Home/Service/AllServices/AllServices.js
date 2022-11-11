import React, { useEffect, useState } from 'react';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {
    const [allservices, setAllservices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setAllservices(data))
    }, [])
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                allservices.map(service => <AllServicesCard
                    key={service.service_id}
                    service={service}
                ></AllServicesCard>)
            }
        </div>
    );
};

export default AllServices;