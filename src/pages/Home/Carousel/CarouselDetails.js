import React from 'react';

export const CarouselDetails = ({ carousel }) => {
    const { img, id, next, prev } = carousel;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gradient'>
                <img src={img} className="w-full" />
            </div>
            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-8">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex justify-start gap-5 transform -translate-y-1/2 left-5 right-5 top-1/4">
                <h1 className=' text-5xl font-bold text-white'>Affordable Price <br /> For Car <br />Servicing</h1>
            </div>
            <div className="absolute flex justify-start gap-5 transform -translate-y-1/2 left-5 right-5 top-2/4 text-white hidden lg:block">
                <p>There are many variations of passages of <br /> available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start gap-5 transform -translate-y-1/2 left-5 right-5 top-3/4 text-white ">
                <div className=' flex-wrap space-x-10'>
                    <button className=' btn'>Discover More</button>
                    <button className='btn btn-outline btn-group'>Latest Project</button>
                </div>
            </div>
        </div>
    )
}
