'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {
    FaBackward,
    FaBookOpen,
    FaFacebookMessenger,
    FaShoppingCart,
} from "react-icons/fa";
import { toast } from 'react-toastify';

export default function userDashboard({ params }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = useSession()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [update, setUpdate] = useState()

    const loadUpdate = async () => {
        const dataUpdate = await fetch(`http://localhost:3000/components/Dashboard/UserDashboard/bookingList/api/update/${params.id}`)
        const data = await dataUpdate.json()
        console.log(data.resp)
        setUpdate(data.resp)
    }

    const handleUpdate = async (event) => {
        event.preventDefault()

        const newUpdate = {
            date: event.target.date.value,
            address: event.target.address.value
        }

        const resp = await fetch(`http://localhost:3000/components/Dashboard/UserDashboard/bookingList/api/update/${params.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUpdate)
        })
        if (resp.status === 200) {
            toast.success("Updated Successfully")
            event.target.reset()
        }

    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        loadUpdate()
    }, [params])

    return (
        <div>
            <div className=' bg-pink-200 font-bold px-20 p-5 text-end mt-5'>
                <h1 className='text-end'>Pro Purlor</h1>

            </div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  items-center ">
                    {/* Page content here */}


                    <div className='bg-blue-100'>

                        <div>
                            <h1 className='text-4xl font-bold text-center pt-10'>Update Item Here </h1>
                        </div>
                        <div className='flex justify-center'>
                            <form onSubmit={handleUpdate} className='bg-blue-100 h-screen p-5 text-center'>
                                <div className="form-control">
                                    <label className="label ">
                                        <span className="label-text">Service_Id</span>
                                    </label>
                                    <input type="text" name='id' required defaultValue={update?._id} placeholder="service id" className="input input-bordered w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label ">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' required defaultValue={data?.user?.email} placeholder="email" className="input input-bordered w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label ">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' required defaultValue={data?.user?.name} placeholder="Name" className="input input-bordered w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label ">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" name='img' required defaultValue={update?.img} placeholder="Image" className="input input-bordered w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label ">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' required defaultValue={update?.price} placeholder="price" className="input input-bordered w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label ">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <input type="text" name='order' required defaultValue={update?.name} placeholder="Service Name" className="input input-bordered w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label ">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name='date' required defaultValue={new Date().getDate()} placeholder="Date" className="input input-bordered w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label ">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" name='address' required placeholder="Address" className="input input-bordered w-96" />
                                </div>
                                <input className="btn btn-secondary mt-3 " type="submit" value="Confirm Order" />
                            </form>
                        </div>
                    </div>



                    <label
                        htmlFor="my-drawer-2"
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <div className="flex justify-between">
                            {/* <img className="w-2/4" src="/src/assets/assets/logo.png" alt="" /> */}
                            <label
                                htmlFor="my-drawer-2"
                                class="inline-flex lg:hidden items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                <svg
                                    class="-ml-0.5 mr-1.5 h-2 w-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M14.348 5.651a.5.5 0 0 1 0 .707L10.707 10l3.641 3.643a.5.5 0 0 1-.708.707L10 10.707l-3.643 3.64a.5.5 0 0 1-.707-.707L9.293 10 5.65 6.358a.5.5 0 0 1 .708-.707L10 9.293l3.642-3.642a.5.5 0 0 1 .707 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                Close
                            </label>
                        </div>

                        <div className="mt-5">
                            <li>
                                <Link href='/components/Dashboard/UserDashboard/Bookings'>{" "} <span><FaShoppingCart />{" "} </span>{" "} Booking </Link>
                            </li>
                            <li>
                                <Link href='/components/Dashboard/UserDashboard/bookingList'> {" "}<span><FaBookOpen /> </span>{" "} Booking List </Link>
                            </li>
                            <li>
                                <Link href='Bookings'> <span> {" "} <FaFacebookMessenger /> </span>Review </Link>
                            </li>
                            <li>
                                <Link href='/'> <span> {" "} <FaBackward /></span>Back to home</Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

