import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
const Reviews = ({ myreviews, handleDelete }) => {
    const { _id, customer, picture, rating, message, serviceName } = myreviews;
    const notify = () => toast('Deleted Successfully');
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <h2 className="card-title">{serviceName}</h2>
            <Toaster></Toaster>
            <div className="card-actions justify-end" onClick={notify}>

                <button onClick={() => handleDelete(_id)}

                    className="btn btn-square btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            <div className="card-body">
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={picture} alt='' />
                    </div>
                </div>
                <h2 className="card-title">{customer}</h2>
                <p>{message}</p>
                <div className="badge badge-secondary">{rating}</div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Edit</button>
                </div>
            </div>
        </div>
    );
};

export default Reviews;