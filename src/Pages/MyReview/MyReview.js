import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Reviews from './Reviews';

const MyReview = () => {
    const { user } = useContext(AuthContext);

    const [myreview, setMyreview] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyreview(data))
    }, [user?.email])

    const handleDelete = _id => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remaining = myreview.filter(reviews => reviews._id !== _id);
                    setMyreview(remaining);
                }
            })
    }

    return (
        <div className='m-20 grid sm:grid-cols-1 md:grid-cols-3 gap-20'>

            {
                myreview.map(myreviews => <Reviews
                    key={myreviews._id}
                    myreviews={myreviews}
                    handleDelete={handleDelete}
                ></Reviews>)
            }
        </div>
    );
};

export default MyReview;