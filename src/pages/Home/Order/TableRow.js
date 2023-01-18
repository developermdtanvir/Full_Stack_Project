import React from 'react';
import { MdCancel } from 'react-icons/md';

export const TableRow = ({ odr, handleRemove, handleUpdate }) => {
    const { serviceName, name, phone, email, service, _id, status } = odr



    return (
        <tr>
            <th>
                <label>
                    <MdCancel onClick={() => handleRemove(_id)} className=' text-4xl cursor-pointer' />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold"></div>
                        <div className="text-sm opacity-50">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>Purple</td>
            <th>
                <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'panding'}</button>
            </th>
        </tr>
    )
}
