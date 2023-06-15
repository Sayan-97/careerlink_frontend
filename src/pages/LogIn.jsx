import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
    return (
        <section
            className='container flex justify-center'
        >
            <form className='w-[40%] mx-auto p-4 mt-28 rounded shadow-xl grid gap-6'>
                <p className='text-xl font-medium'>Log In to your Account</p>

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

                <button
                    className='bg-blue-500 text-white text-lg font-medium px-4 py-1 rounded'>
                    Log In
                </button>

                <Link to={'/signup'} className={`text-center underline text-lg`}>
                    Dont have an Account? SignUp.
                </Link>
            </form>
        </section>
    )
}

export default LogIn