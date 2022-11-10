import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
const Reviews = ({ myreviews, handleDelete, handleUpdate }) => {
    const { _id, customer, picture, rating, message, serviceName, status } = myreviews;
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
                <p>{message + status}</p>
                <div className="badge badge-secondary">{rating}</div>
                <div className="card-actions justify-end">

                    {
                        <div onClick={() => handleUpdate(_id)}>
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-3" className="btn">Edit</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">Update Your Comment!</h3>
                                    <p className="py-4">
                                        <div className="form-control">
                                            <textarea className="textarea textarea-bordered" name='message' placeholder="Your Comment">
                                                {status}
                                            </textarea>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Reviews;