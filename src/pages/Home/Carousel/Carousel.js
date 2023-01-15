import React from 'react'
import img1 from './../../../assets/images/banner/1.jpg'
import img2 from './../../../assets/images/banner/2.jpg'
import img3 from './../../../assets/images/banner/3.jpg'
import img4 from './../../../assets/images/banner/4.jpg'
import img5 from './../../../assets/images/banner/5.jpg'
import img6 from './../../../assets/images/banner/6.jpg'
import './Carousel.css'
import { CarouselDetails } from './CarouselDetails'
export const Carousel = () => {
    const carousel = [
        {
            img: img1,
            id: 1,
            next: 2,
            prev: 6
        },
        {
            img: img2,
            id: 2,
            next: 3,
            prev: 1
        },
        {
            img: img3,
            id: 3,
            next: 4,
            prev: 2
        },
        {
            img: img4,
            id: 4,
            next: 5,
            prev: 3
        },
        {
            img: img5,
            id: 5,
            next: 6,
            prev: 4
        },
        {
            img: img6,
            id: 6,
            next: 1,
            prev: 5
        }

    ]
    return (
        <div className="carousel w-full py-10 rounded-xl">
            {
                carousel.map(carousel => <CarouselDetails carousel={carousel} />)
            }
        </div>
    )
}
