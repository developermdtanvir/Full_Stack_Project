import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthProvider'
import { About } from '../About/About'
import { Carousel } from '../Carousel/Carousel'
import { Service } from '../Service/Service'

export const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email);
    return (
        <div>
            <Carousel />
            <About />
            <Service />
        </div>
    )
}
