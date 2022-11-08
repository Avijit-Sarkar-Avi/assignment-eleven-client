import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { id, name, details, image, rating, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} alt="Shoes" className="rounded-xl h-40 w-72" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-2xl'>
                    <span className='mr-20'>৳ {price}</span>
                    <span>Rating: {rating}</span>
                </p>

                <p>
                    {
                        details.length > 100 ?
                            <p>{details.slice(0, 100) + '...'} <Link to=''>Read More</Link> </p>
                            :
                            <p>{details}</p>
                    }
                </p>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;