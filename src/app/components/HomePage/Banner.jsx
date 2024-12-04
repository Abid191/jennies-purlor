import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className='bg-red-50 lg:flex lg:justify-evenly '>
            <div className='lg:mt-32 mb-10 lg:ml-0 ml-10 lg:pt-0 pt-10'>
                <h1 className='text-4xl font-bold'>BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                <button className='btn btn-secondary mt-5 px-8'>Get an Appointment</button>
            </div>
            <div>
                <figure>
                    <Image src='/assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png' alt='women' height={350} width={450} className='mt-8 mb-10 lg:ml-0 ml-10'>
                    </Image>
                </figure>
            </div>
        </div>
    )
}
