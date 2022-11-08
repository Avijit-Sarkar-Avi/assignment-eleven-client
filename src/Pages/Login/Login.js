import React, { useContext } from 'react';
import UseTitle from '../../Hooks/UseTitle';
import Header from '../Shared/Header/Header';
import image from '../../asset/footer_image.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    UseTitle('Login')

    const { loginUser } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
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

                            <div className="btn btn-warning shadow-lg">
                                <span className='flex align-baseline'>
                                    Or Login With Google
                                    <FaGoogle className='text-xl ml-2'></FaGoogle>
                                </span>
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