import React from 'react'
import { About } from '../About/About'
import { Carousel } from '../Carousel/Carousel'
import { Service } from '../Service/Service'

export const Home = () => {
    return (
        <div>
            <Carousel />
            <About />
            <Service />
        </div>
    )
}
