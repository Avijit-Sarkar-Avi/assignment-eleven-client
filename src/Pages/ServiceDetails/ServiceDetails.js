import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../Hooks/UseTitle';
import ServiceReview from './ServiceReview';


const ServiceDetails = () => {
    UseTitle('Details')
    const { _id, name, details, image, rating, price } = useLoaderData();

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.fname.value} ${form.lname.value}`;
        const picture = form.urlPic.value;
        const rating = form.rating.value;
        const message = form.message.value

        const order = {
            service: _id,
            serviceName: name,
            price,
            customer: name,
            picture,
            rating,
            message
        }



        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error))

    }

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?service=${_id}`)
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


            <div className='m-20 grid grid-cols-3 gap-20'>
                {
                    review.map(reviews => <ServiceReview
                        key={reviews._id}
                        reviews={reviews}
                    ></ServiceReview>)
                }
            </div>


            <div className="hero bg-base-200">
                <form onSubmit={handleReview} className="card flex-shrink-0 w-full shadow-2xl bg-base-100 p-20">
                    <div className="card-body grid grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name='fname' placeholder="First Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name='lname' placeholder="Last Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name='urlPic' placeholder="Image URL" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Comment</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name='message' placeholder="Your Comment"></textarea>
                    </div>

                    <div className="form-control mt-6">
                        <input className='btn btn-primary w-28' type="submit" value="Submit" />
                    </div>

                </form>
            </div>

        </>
    );
};

export default ServiceDetails;