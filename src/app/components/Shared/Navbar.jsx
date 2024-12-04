'use client'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


export default function Navbar() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const session = useSession()
    console.log(session)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState({})

    // eslint-disable-next-line react-hooks/exhaustive-deps

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const loadData = async () => {
            const data = await fetch(`http://localhost:3000/Signup/api/get/${session?.data?.user?.email}`)
            const resp = await data.json()
            console.log(resp.Users)
            setUser(resp.Users)
        }
        loadData()
    }, [session])

    console.log(user)
    const navItems = <>

        <Link href='/' className='ml-5 hover:text-blue-400' >Home</Link>
        <Link href='Links' className='ml-5 hover:text-blue-400'>Our Portfolio</Link>
        <Link href='' className='ml-5 hover:text-blue-400'>Our Team</Link>
        <Link href='' className='ml-5 hover:text-blue-400'>Contact Us</Link>

        {
            session?.data && (user?.role == 'admin' ?

                (<Link href='/components/Dashboard/AdminDashboard/adminDashboard' className='ml-5 hover:text-blue-400'>Admin-DashBoard</Link>) :
                (<Link href='/components/Dashboard/UserDashboard/userDashboard' className='ml-5 hover:text-blue-400'>DashBoard</Link>))
        }

    </>

    return (

        <div className='bg-red-50'>
            <div className="navbar px-10 pt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {navItems}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl flex">
                        <Image src='/assets/logo.png' alt='logo' height={130} width={100} ></Image>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navItems}

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        !session.data ?
                            <Link href='Login' className=" btn btn-secondary px-10">Login</Link> :
                            <button className=" btn btn-secondary px-10" onClick={() => signOut()}>Logout</button>
                    }
                </div>
            </div>
        </div>
    )
}
