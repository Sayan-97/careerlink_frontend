import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header
            className='py-4 shadow-lg'
        >
            <nav
                className='container flex items-center justify-between'
            >
                <div>
                    <Link to={`/`}>
                        <p
                            className='text-lg font-medium'
                        >Career Link</p>
                    </Link>
                </div>

                <Link to={`/login`}>
                    <button
                        className='bg-blue-500 text-white text-lg font-medium px-4 py-1 rounded'>
                        Join Us
                    </button>
                </Link>

            </nav>
        </header>
    )
}

export default Header