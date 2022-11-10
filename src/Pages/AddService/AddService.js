import React from 'react';
import UseTitle from '../../Hooks/UseTitle';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {
    UseTitle('Add Service')

    const notify = () => toast('Services added successfully');

    const handleAddData = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.eventName.value;
        const price = form.price.value;
        const image = form.urlPic.value;
        const rating = form.rating.value;
        const details = form.message.value

        const newEvent = {
            name,
            price,
            image,
            rating,
            details
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEvent)
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
        <div>
            <div className="hero bg-base-200">
                <form onSubmit={handleAddData} className="card flex-shrink-0 w-full shadow-2xl bg-base-100 p-20">
                    <div className="card-body grid grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name Of Event</span>
                            </label>
                            <input type="text" name='eventName' placeholder="Event Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
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
        </div>
    );
};

export default AddService;