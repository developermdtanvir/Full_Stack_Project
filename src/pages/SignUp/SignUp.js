import React, { useContext, useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

export const SignUp = () => {
    const { createUser, googleSignUp, gitHubSignUp } = useContext(AuthContext)

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handleSubmit = e => {
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
            .then(res => {

            })
            .then(error => console.log(error));
        e.preventDefault()
    }

    const googleRegister = () => {
        googleSignUp()
            .then(res => {
                console.log(res);
                const { displayName, email } = res.user;
                const newUserInfo = { ...user };
                newUserInfo.name = displayName
                newUserInfo.email = email;
                setUser(newUserInfo)
                console.log(displayName);
            });
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
                        <h1 className=' text-center text-5xl font-bold'>Sign Up </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                        </div>
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
                            <FcGoogle onClick={googleRegister} className=' text-4xl cursor-pointer' />
                            <AiOutlineGithub onClick={gitHubSignUp} className=' text-4xl cursor-pointer' />
                        </div>
                        <Link to='/login'>or Login</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
