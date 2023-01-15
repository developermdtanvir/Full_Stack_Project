import React from 'react';
import img1 from '../../../assets/images/about_us/parts.jpg';
import img from '../../../assets/images/about_us/person.jpg';
export const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row p-10">
                <div className="text-center lg:text-left relative w-1/2 p-14">
                    <img className=' w-3/5' src={img} alt="" />
                    <div className='left-1/4 bg-white rounded-md top-1/2 w-2/5 absolute'>
                        <img className=' p-8 ' src={img1} alt="" />
                    </div>
                </div>
                <div className=' w-1/2 space-y-8'>
                    <p className=' text-orange-600 font-bold'>About Us</p>
                    <h1 className=' text-5xl font-bold'>We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className=' text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className=' text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className=' btn bg-[#FF3811]'>Get More Info</button>
                </div>
            </div>
        </div>
    )
}
