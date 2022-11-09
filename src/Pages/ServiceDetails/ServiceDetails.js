import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { name, details, image, rating, price } = useLoaderData();
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} alt='' className="w-96 h-72 rounded-lg shadow-2xl" />
                <div>
                    <h2 className="card-title text-5xl font-bold">
                        {name}
                        <div className="badge badge-secondary">{rating}</div>
                    </h2>
                    <p className="py-6">{details}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline text-xl">Price: {price}</div>
                    </div>
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;