import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardServices({service}) { 
    
    const {_id,img,name,description,price} = service
    
    return (
        <div className=' text-center border-2 w-2/3 p-5 space-y-3 shadow-cyan-700 mx-auto shadow-lg hover:scale-110 translate-x-4 duration-300'>
            <Image src={img} alt='logo' height={65} width={72} className='mx-auto'>
            </Image>
            <h3 className='font-bold'>{name}</h3>
            <p className='text-pink-500 font-bold'>Price:${price}</p>
            <p>{description}</p>
            <Link href={`/components/Dashboard/UserDashboard/Bookings/${_id}`}><button className="btn btn-secondary mt-3">Booking Now</button></Link>
        </div>
    )
}

