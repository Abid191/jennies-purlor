
import { getServices } from '@/services/getAllApi'
import Image from 'next/image'
import React from 'react'
import CardServices from '../Card/CardServices'

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Middle() {

    const data = await getServices()
    
    return (
        <div>
            <div className='text-center md:text-4xl text-2xl md:mt-20 mt-10 font-bold'>
                <h1 >Our Awesome <span className='text-pink-500'>Services</span></h1>
            </div>

            <div>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:mt-20 mt-10'>
                    {
                        data.resp?.map((service) => (
                            <CardServices key={service._id}
                                service={service}
                            ></CardServices>
                        ))
                    }
                </div>
                <div className='text-center mt-20'>
                    <button className="btn btn-secondary ml-6 px-8 ">Explore More</button>
                </div>
            </div>


            <div className='bg-pink-100 mt-10 p-5 flex justify-evenly'>
                <div className='md:flex justify-evenly md:py-20 py-10'>
                    <div>
                        <Image Image src='/assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png' alt='women' height={350} width={450} className='mt-8 mb-10 lg:ml-0 ml-10'></Image>
                    </div>
                </div>
                <div className=' space-y-5 mt-28'>
                    <h1 className='text-4xl font-bold'>Let us handle your <br /> screen <span className='text-pink-500'>Professionally</span>.</h1>
                    <p> <small>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general ipsum. <br />Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Purus commodo ipsum.</small> </p>
                    <div className='flex gap-10'>
                        <div className=' '>

                            <h2 className='text-pink-500 font-bold text-4xl'>500+</h2>
                            <h2 className='mt-3'>HAPPY CUSTOMER</h2>

                        </div>
                        <div className=' '>
                            <h2 className='text-pink-500 font-bold text-4xl'>16+</h2>
                            <h2 className='mt-3'>Total Service</h2>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}   
