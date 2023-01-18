import React, { useContext, useEffect, useState } from 'react'
import { MdCancel } from 'react-icons/md'
import { AuthContext } from '../../../Context/AuthProvider'
import { TableRow } from './TableRow'
export const Order = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const [order, setOrder] = useState([]);
    const [image, setImage] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user?.email}`, {
            headers: {
                authorizeton: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOutUser()
                    window.location.reload()
                }
                res.json()
            })
            .then(data => {
                console.log(data);
                setOrder(data)
            });
    }, [user?.email, logOutUser])


    const handleRemove = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                const remainning = order.filter(order => order._id !== id)
                setOrder(remainning);
            });
    }
    const handleUpdate = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: `PATCH`,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'APPROVED' })
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remainning = order.filter(update => update._id !== id);
                    const approving = order.find(change => change._id === id)
                    approving.status = 'APPROVED';
                    const newOrder = [approving, ...remainning];
                    setOrder(newOrder);
                }
            });
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/service/${order.service}`)
    //         .then(res => res.json())
    //         .then(data => setImage(data));
    // }, [order.service])

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <MdCancel className=' text-4xl cursor-pointer' />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map(odr => <TableRow handleRemove={handleRemove} handleUpdate={handleUpdate} key={odr._id} odr={odr} />)
                    }
                </tbody>
            </table>
        </div>
    )
}
