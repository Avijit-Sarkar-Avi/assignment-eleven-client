import React from 'react';

const ServiceCard = ({ service }) => {
    const { id, name, details, image, rating, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-40 w-72" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-2xl'>৳ {price}</p>
                <p>{details}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;