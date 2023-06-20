import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Home, LogIn, Profile, SignUp } from '../pages'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<LogIn />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/profile' element={<Profile />} />
        </Routes>
    )
}

export default AppRoutes