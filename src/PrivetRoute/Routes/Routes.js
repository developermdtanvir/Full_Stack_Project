import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Main } from '../../layout/Main'
import { Checkout } from '../../pages/Home/Checkout/Checkout'
import { Home } from '../../pages/Home/Home/Home'
import { Order } from '../../pages/Home/Order/Order'
import { Login } from '../../pages/Login/Login'
import { SignUp } from '../../pages/SignUp/SignUp'
import { PrivetRoute } from '../PrivetRoute'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/order',
                element: <PrivetRoute><Order /></PrivetRoute>
            },
            {
                path: '/checkout/:id',
                element: <PrivetRoute> <Checkout /> </PrivetRoute>,
                loader: ({ params }) => fetch(`http:localhost:5000/service/${params.id}`)
                // loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
            }
        ]
    }
])

export default router;