import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardBooking({ booking, handleDelete }) {

    const { _id, img, name, price, date, address, order, description, role } = booking || {}

    return (
        <div className="card bg-base-100 w-96 shadow-xl mx-auto pt-5">
            <div className='flex justify-around'>
                <div>
                    <figure>
                        <Image src={img} alt='logo' height={65} width={70}></Image>
                    </figure>
                </div>
                <div>
                    <div className='flex-col pt-3'>
                        {
                            booking.role === 'done' ?
                            <p className=' py-4 bg-red-200 p-3 rounded-lg  font-bold'>Approved</p> :
                            <td><button className='btn btn-success -ml-6'>Pending</button></td>
                        }
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {order}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className="card-actions ">
                    <h2 ><span className='text-pink-600 font-bold'>Price :</span> ${price}</h2>
                </div>
                <div className="card-actions ">
                    <h2 ><span className='text-pink-600 font-bold'>Date :</span> {date}</h2>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, mollitia. Vitae cum doloremque reprehenderit assumenda numquam, fuga animi ullam? Minima.</p>

                <div className='flex justify-between'>
                    <Link href={`/components/Dashboard/UserDashboard/bookingList/update/${_id}`}><button className="badge btn badge-outline">Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className="badge btn badge-outline ml-5">Delete</button>
                </div>
            </div>
        </div>
    )
}
