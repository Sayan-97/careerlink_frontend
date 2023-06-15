import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <section
            className='container flex justify-center'
        >
            <form className='w-[40%] mx-auto p-4 mt-28 rounded shadow-xl grid gap-6'>
                <p className='text-xl font-medium'>Create your Account</p>

                <div className='grid gap-1'>
                    <label
                        htmlFor="name"
                        className='text-lg font-medium'
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name='name'
                        id='name'
                        placeholder='Enter your Username'
                        className='border-2 border-gray-400 p-2 rounded'
                    />
                </div>

                <div className='grid gap-1'>
                    <label
                        htmlFor="email"
                        className='text-lg font-medium'
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        placeholder='Enter your Email'
                        className='border-2 border-gray-400 p-2 rounded'
                    />
                </div>

                <div className='grid gap-1'>
                    <label
                        htmlFor="password"
                        className='text-lg font-medium'
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name='password'
                        id='password'
                        placeholder='Enter your Password'
                        className='border-2 border-gray-400 p-2 rounded'
                    />
                </div>

                <div className='grid gap-1'>
                    <label
                        htmlFor="cnfpassword"
                        className='text-lg font-medium'
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name='cnfpassword'
                        id='cnfpassword'
                        placeholder='Confirm your Password'
                        className='border-2 border-gray-400 p-2 rounded'
                    />
                </div>

                <button
                    className='bg-blue-500 text-white text-lg font-medium px-4 py-1 rounded'>
                    Sign Up
                </button>

                <Link to={'/login'} className={`text-center underline text-lg`}>
                    Already have an Account? LogIn.
                </Link>
            </form>
        </section>
    )
}

export default SignUp