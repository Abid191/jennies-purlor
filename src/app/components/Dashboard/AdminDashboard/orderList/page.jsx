'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {
    FaBackward,
    FaClipboardList,
    FaPeopleArrows,
    FaPeopleCarry,
    FaPlus,
    FaShoppingBag,
} from "react-icons/fa";
import { toast } from 'react-toastify';

export default function userDashboard() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const session = useSession()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [bookings, setBookings] = useState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const loaderData = async () => {
        const data = await fetch(`http://localhost:3000/components/Dashboard/UserDashboard/bookingList/api/${session?.data?.user?.email}`)
        const resp = await data.json()
        console.log(resp?.myBookings)
        setBookings(resp?.myBookings)
    }

    const handleConfirm = async (booking) => {
        const loadData = await fetch(`http://localhost:3000/components/Dashboard/UserDashboard/Bookings/api/${booking._id}`,{
            method : 'PATCH',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({booking})
        })
        if(loadData.status === 200){
            toast.success('update successfully')
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        loaderData()
    }, [loaderData, session])

    return (
        <div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  items-center ">
                    {/* Page content here */}

                    <div>
                        <div className='flex bg-pink-200 font-bold px-20 p-5 justify-between mt-5'>
                            <h1>Order List</h1>
                            <h1>Pro Purlor</h1>
                        </div>

                        <div className="overflow-x-auto bg-blue-100 h-screen p-5">

                            <table className="table table-xs bg-white p-5">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email-ID</th>
                                        <th>Service</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bookings?.map((booking, index) => (
                                            <tr key={index}>
                                                <th>{index + 1}</th>
                                                <td> {booking.name} </td>
                                                <td> {booking.email} </td>
                                                <td> {booking.order} </td>
                                                {
                                                booking.role === 'done' ?
                                                <p className=' py-4  font-bold'>Approve</p> :
                                                <td><button onClick={() => handleConfirm(booking)} className='btn btn-success -ml-6'>Pending</button></td>
                                                }
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
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
                                <Link href='/components/Dashboard/AdminDashboard/allUsers'>{" "} <span><FaPeopleCarry />{" "} </span>{" "} All-User </Link>
                            </li>
                            <li>
                                <Link href='/components/Dashboard/AdminDashboard/orderList'>{" "} <span><FaShoppingBag />{" "} </span>{" "} Order-List </Link>
                            </li>
                            <li>
                                <Link href='/components/Dashboard'> {" "}<span><FaPlus /> </span>{" "} Add-Service </Link>
                            </li>
                            <li>
                                <Link href='/components/Dashboard/AdminDashboard/makeAdmin'> <span> {" "} <FaPeopleArrows /> </span>Make-Admin </Link>
                            </li>
                            <li>
                                <Link href='kings'> <span> {" "} <FaClipboardList /> </span>Manage-Service </Link>
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
