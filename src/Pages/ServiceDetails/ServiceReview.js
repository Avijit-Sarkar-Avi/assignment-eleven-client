import React from 'react';

const ServiceReview = ({ reviews }) => {

    const { customer, picture, rating, message } = reviews;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={picture} alt='' />
                    </div>
                </div>
                <h2 className="card-title">{customer}</h2>
                <p>{message}</p>
                <div className="badge badge-secondary">{rating}</div>
            </div>
        </div>
    );
};

export default ServiceReview;