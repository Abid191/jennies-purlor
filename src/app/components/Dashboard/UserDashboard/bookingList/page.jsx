'use client'
import CardBooking from '@/app/components/Card/CardBooking'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaBackward, FaBookOpen, FaFacebookMessenger, FaShoppingCart } from 'react-icons/fa'

export default function page() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const session = useSession()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [bookings, setBookings] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const loadData = async () => {
        const data = await fetch(`http://localhost:3000/components/Dashboard/UserDashboard/bookingList/api/${session?.data?.user?.email}`)
        const resp = await data.json()
        console.log(resp.myBookings)
        setBookings(resp.myBookings)
    }
    const handleDelete = async (id) => {
        const data = await fetch(`http://localhost:3000/components/Dashboard/UserDashboard/bookingList/api/delete/${id}`, {
            method: 'DELETE',
        })
        console.log(data)
        const resp = await data.json()
        if (resp?.Response?.deletedCount > 0) {
            loadData()
        }
    }


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        loadData()
    }, [loadData,session])


    return (
        <div>
            <div>
                <div className=' bg-pink-200 font-bold px-20 p-5 text-end mt-5'>
                    <h1 className='text-end'>Pro Purlor</h1>
                </div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content  items-center ">
                        {/* Page content here */}

                        <div className='grid grid-cols-1 lg:grid-cols-3 md:mt-20 mt-10 gap-y-10'>
                            {
                                bookings.map((booking) => (<CardBooking
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                ></CardBooking>))
                            }
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



        </div>
    )
}

