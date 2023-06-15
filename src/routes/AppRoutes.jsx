import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, LogIn, Profile, SignUp } from '../pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<LogIn />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/profile' element={<Profile />}/>
        </Routes>
    )
}

export default AppRoutes