import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../pages/Shared/Footer/Footer'
import { Header } from '../pages/Shared/Header/Header'

export const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
