'use client'
import Link from 'next/link'
import React from 'react'
import { signIn } from 'next-auth/react'
import Social_Login from '../components/Shared/SocialLogin';
import { useRouter, useSearchParams } from 'next/navigation';


export default function Login() {

    const router = useRouter()
    const searchparams = useSearchParams()
    const path = searchparams.get('redirect')
    const handleLogin = async (event) => {

        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;
        const resp = await signIn('credentials', {
            email,
            password,
            redirect: true,
            callbackUrl: path ? path : '/'
        })
        // event.target.reset()
        if (resp.status === 200) {
            router.push('/')
        }
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="md:text-5xl md:mt-0 mt-20 text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm mt-5 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>

                        <div>
                            <p><small>Don not have an account please
                                <Link href='Signup' className='ml-3 font-bold text-pink-500'>SingUp</Link>
                            </small></p>
                        </div>
                    </form>

                    <Social_Login></Social_Login>

                </div>
            </div>
        </div>
    )
}
