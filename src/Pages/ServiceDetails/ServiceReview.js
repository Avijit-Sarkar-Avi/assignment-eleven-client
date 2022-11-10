import React from 'react';

const ServiceReview = ({ reviews }) => {

    const { serviceName, picture, rating, message } = reviews;

    return (
        <div>
            <div className="card w-96 h-72 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={picture} alt='' />
                        </div>
                    </div>
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{message}</p>
                    <button className="btn gap-2 w-52">
                        Rating
                        <div className="badge badge-secondary">{rating}</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceReview;