import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../Hooks/UseTitle';
import ReviewField from './ReviewField';
import ServiceReview from './ServiceReview';


const ServiceDetails = () => {
    UseTitle('Details')
    const { _id, name, details, image, rating, price } = useLoaderData();



    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`https://assignment-eleven-server-seven.vercel.app/orders?service=${_id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [_id])



    return (
        <>
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
                            <div className="badge badge-outline text-xl">Price: ৳{price}</div>
                        </div>
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>


            <div className='m-20 grid sm:grid-cols-1 md:grid-cols-3 gap-20'>
                {
                    review.map(reviews => <ServiceReview
                        key={reviews._id}
                        reviews={reviews}
                    ></ServiceReview>)
                }
            </div>


            <ReviewField></ReviewField>

        </>
    );
};

export default ServiceDetails;