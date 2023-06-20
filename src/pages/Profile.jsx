import React from 'react'

const Profile = () => {
    return (
        <section
            className='container flex justify-center'
        >
            <form className='w-[60%] mx-auto p-4 mt-28 rounded shadow-xl grid gap-6'>
                <p className='text-xl font-medium'>Create your Profile</p>

                <div className='grid grid-cols-2 gap-4'>

                    <div className='grid gap-1'>
                        <label
                            htmlFor="email"
                            className='text-lg font-medium'
                        >
                            DOB
                        </label>
                        <input
                            type="date"
                            name='date'
                            id='date'
                            placeholder='Enter your Email'
                            className='border-2 border-gray-400 p-2 rounded'
                        />
                    </div>

                    <div className='grid gap-1'>
                        <label
                            htmlFor="email"
                            className='text-lg font-medium'
                        >
                            Gender
                        </label>
                        <select 
                            name="" 
                            id=""
                            className='border-2 border-gray-400 p-2 rounded'
                        >
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </select>
                    </div>
                </div>

                <div className='grid gap-1'>
                    <label
                        htmlFor="about"
                        className='text-lg font-medium'
                    >
                        About
                    </label>
                    <textarea
                        name='about'
                        id='about'
                        placeholder='Describe yourself'
                        className='border-2 border-gray-400 p-2 rounded'
                    />
                </div>

            </form>
        </section>
    )
}

export default Profile