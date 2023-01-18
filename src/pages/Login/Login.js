import React, { useContext } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

export const Login = () => {
    const { loginUser, googleSignUp } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const googleLogin = () => {
        googleSignUp()
            .then(res => {
                const { email } = res.user
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                }).then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token)
                    });

                navigate(from, { replace: true });
            })
    }

    const handleSubmit = e => {
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
            .then(res => {

            });

        e.preventDefault()
    }
    return (
        <div className="hero min-h-screen my-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit} >
                        <h1 className=' text-center text-5xl font-bold'>Login Now </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" name="" value="Sign Up" />
                        </div>
                        <p>or signUp With </p>
                        <div className=' flex justify-around'>
                            <FcGoogle onClick={googleLogin} className=' text-4xl cursor-pointer' />
                            <AiOutlineGithub className=' text-4xl cursor-pointer' />
                        </div>
                        <Link to='/signup'>or Sign Up</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
