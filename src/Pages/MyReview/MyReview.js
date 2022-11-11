import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import UseTitle from '../../Hooks/UseTitle';
import Reviews from './Reviews';

const MyReview = () => {
    UseTitle('My Review')

    const { user } = useContext(AuthContext);

    const [myreview, setMyreview] = useState([])


    useEffect(() => {
        fetch(`https://assignment-eleven-server-seven.vercel.app/order?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('my-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyreview(data))
    }, [user?.email])

    const handleDelete = _id => {
        fetch(`https://assignment-eleven-server-seven.vercel.app/orders/${_id}`, {
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

    const handleUpdate = _id => {
        fetch(`https://assignment-eleven-server-seven.vercel.app/orders/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: `${myreview.message}` })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = myreview.filter(reviews => reviews._id !== _id);
                    const approving = myreview.find(reviews => reviews._id === _id);
                    approving.status = `${myreview.message}`

                    const updated = [approving, ...remaining];
                    setMyreview(updated);
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
                    handleUpdate={handleUpdate}
                ></Reviews>)
            }
        </div>
    );
};

export default MyReview;