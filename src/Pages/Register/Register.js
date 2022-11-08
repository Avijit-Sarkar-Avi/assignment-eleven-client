import React, { useContext } from 'react';
import Header from '../Shared/Header/Header';
import image from '../../asset/footer_image.jpg'
import { Link } from 'react-router-dom';
import UseTitle from '../../Hooks/UseTitle';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {

    UseTitle('Register')

    const { createUser, googleLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error));
    }

    const handleGoogleRegister = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Header></Header>
            <div className="hero w-full  bg-base-200">
                <div className="hero-content grid gap-40 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-3/4' src={image} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center">Register</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>



                            <div onClick={handleGoogleRegister}
                                className="btn btn-warning shadow-lg">
                                <span className='flex align-baseline'>
                                    Or Register With Google
                                    <FaGoogle className='text-xl ml-2'></FaGoogle>
                                </span>
                            </div>

                            <p className='text-center'>Already have an account? Please <Link to="/login" className='text-orange-600 font-bold'>Login</Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;