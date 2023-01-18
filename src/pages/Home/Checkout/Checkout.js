import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
export const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext)

    const handleSubmit = e => {
        const fristName = e.target.fristName.value;
        const lastName = e.target.lastName.value;
        const name = fristName + ' ' + lastName
        const phone = e.target.phone.value;
        const email = user?.email || 'unregestried'
        const messege = e.target.messege.value;
        const order = {
            service: _id,
            serviceName: title,
            name,
            phone,
            email,
            messege
        }
        fetch(`http://localhost:5000/order`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Product prossed successfully')
                }
            });

        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className=' grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                <input type="text" name='fristName' placeholder="Frist Name" className="input input-bordered input-success w-full max-w-xs" />
                <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered input-success w-full max-w-xs" />
                <input type="number" name='phone' placeholder="Mobile" className="input input-bordered input-success w-full max-w-xs" />
                <input type="email" name='email' placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered input-success w-full max-w-xs" />
                <textarea name='messege' className="textarea textarea-error" placeholder="Bio"></textarea>
                <input type='submit' value='PlaceOrder' className=' text-center btn ' />
            </form>
        </div>
    )
}
