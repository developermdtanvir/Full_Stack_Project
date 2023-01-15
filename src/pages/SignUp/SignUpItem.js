import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export const SignUpItem = ({ handleSubmit, handleBlur, githubRegister, googleRegister }) => {
    return (
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSubmit} >
                    <h1 className=' text-center text-5xl font-bold'>Register Now!</h1>
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
                        <input onBlur={handleBlur} name='email' type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input onBlur={handleBlur} name='password' type="password" placeholder="password" className="input input-bordered" />
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
                        <AiOutlineGithub onClick={githubRegister} className=' text-4xl cursor-pointer' />
                    </div>
                    <Link to='/login'>or Login</Link>
                </form>
            </div>
        </div>
    )
}
