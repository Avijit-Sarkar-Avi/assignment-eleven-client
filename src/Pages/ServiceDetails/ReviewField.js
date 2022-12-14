import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const ReviewField = () => {

    const navigate = useNavigate();

    const notify = () => toast('Review placed successfully');

    const { _id, price, name } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviewerName = `${form.fname.value} ${form.lname.value}`;
        const email = user?.email;
        const picture = form.urlPic.value;
        const rating = form.rating.value;
        const message = form.message.value

        const order = {
            service: _id,
            serviceName: name,
            price,
            customer: reviewerName,
            email,
            picture,
            rating,
            message
        }



        fetch('https://assignment-eleven-server-seven.vercel.app/orders', {
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
                    form.reset();
                }
            })
            .catch(error => console.error(error))

    }


    return (
        <div className="hero bg-base-200">
            <form onSubmit={handleReview} className="card flex-shrink-0 w-full shadow-2xl bg-base-100 p-20">
                <div className="card-body grid grid-cols-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" name='fname' placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name='lname' placeholder="Last Name" className="input input-bordered" required />
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
                        <input type="text" name='urlPic' placeholder="Image URL" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Comment</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='message' placeholder="Your Comment" required></textarea>
                </div>

                <div className="form-control mt-6">
                    <input onClick={notify} className='btn btn-primary w-28' type="submit" value="Submit" />
                    <Toaster></Toaster>
                </div>

            </form>
        </div>
    );
};

export default ReviewField;