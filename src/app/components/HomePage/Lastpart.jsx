import Image from 'next/image';
import React from 'react'
import { FaBeer, FaRegStar } from 'react-icons/fa';

export default function LastPart() {
    return (
        <div>
            <div className='grid md:grid-cols-3 md:mt-20 mt-10'>
                <div className='  border-2 w-2/3 p-5 space-y-3 mx-auto  hover:scale-110 translate-x-4 duration-300 '>
                    <div className='flex items-center'>
                        <Image alt='logo' src='/assets/images/Ellipse 90.png' height={65} width={72}></Image>
                        <h3 className='ml-3 font-bold'>Bria Malone <br /> <small>CEO, Manpo</small> </h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <div className='flex text-yellow-400'>
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                </div>
                <div className='md:mt-0 mt-10  border-2 w-2/3 p-5 space-y-3 mx-auto  hover:scale-110 translate-x-4 duration-300 '>
                    <div className='flex items-center'>
                        <Image alt='logo' src='/assets/images/Ellipse 91.png' height={65} width={72}></Image>
                        <h3 className='ml-3 font-bold'>Nash Patrik <br /> <small>CEO, Manpo</small> </h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <div className='flex text-yellow-400'>
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                </div>
                <div className='md:mt-0 mt-10  border-2 w-2/3 p-5 space-y-3 mx-auto  hover:scale-110 translate-x-4 duration-300 '>
                    <div className='flex items-center'>
                        <Image alt='logo' src='/assets/images/Ellipse 92.png' height={65} width={72}></Image>
                        <h3 className='ml-3 font-bold'>Miriam Barron <br /> <small>CEO, Manpo</small> </h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <div className='flex text-yellow-400'>
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                </div>
            </div>


            {/* Last Side  */}

            <div className='bg-pink-100 md:py-20 py-10 md:mt-20 mt-10'>
                <h1 className='text-center font-bold text-4xl'>Let us handle your <br />
                    project, professionally.</h1>

                <div className='w-3/4 flex justify-center gap-10 mx-auto md:mt-20 mt-10'>
                    <input className='md:w-2/4 p-2 rounded' type="text" placeholder='Fast Name' />
                    <input className='md:w-2/4 p-2 rounded' type="text" placeholder='Last Name' />
                </div>
                <div className='w-3/4 flex justify-center gap-10 mx-auto mt-5'>
                    <input className='md:w-2/4 p-2 rounded' type="text" placeholder='Email Address' />
                    <input className='md:w-2/4 p-2 rounded' type="text" placeholder='Last Number' />
                </div>
                <div className='text-center mt-5 '>
                    <textarea className="textarea w-9/12 h-40" placeholder="Your Massage"></textarea>
                </div>
            </div>
        </div>
    )
}
