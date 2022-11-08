import React from 'react';
import UseTitle from '../../Hooks/UseTitle';
import Header from '../Shared/Header/Header';
import image from '../../asset/footer_image.jpg'
import { Link } from 'react-router-dom';

const Login = () => {
    UseTitle('Login')

    const handleLogin = event => {
        event.preventDefault();
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
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
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
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p className='text-center'>Donot have account? Please <Link to="/register" className='text-orange-600 font-bold'>Register</Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;