'use client'
import Link from 'next/link'
import React from 'react'
import Social_Login from '../components/Shared/SocialLogin'

export default function SignUp() {
    const handleSignUp = async (event) => {
        event.preventDefault()

        const form = event.target 
        const name = form.name.value 
        const email = form.email.value 
        const password = form.password.value

        const newUser = {name,email,password} 
        console.log(newUser) 

        const resp = await fetch('http://localhost:3000/Signup/api',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newUser)
        })
        if(resp){
            form.reset()
        }
    }
    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center md:mt-20 lg:text-left">
                    <h1 className="md:text-5xl md:mt-0 mt-20 text-4xl font-bold">SignUp!</h1>
                </div>
                <div className="card  flex-shrink-0 w-full mt-5 shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body w-96">
                        <div className="form-control">

                            <input type="text" name='name' required placeholder="Name" className="input input-bordered " />
                        </div>
                        <div className="form-control">

                            <input type="text" name='email' required placeholder="UserName Or Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" name='password' required placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Create an account </button>
                        </div>


                        <div className='mx-auto'>
                            <p ><small>Already have an account please
                                <Link href='Login' className='ml-3 font-bold text-pink-500' >Login</Link>
                            </small></p>
                        </div>
                    </form>
                    <Social_Login></Social_Login>
                </div>
            </div>
        </div>
    )
}
