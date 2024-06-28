import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar />
            <Outlet />
            Footer
        </div>
    )
}

export default MainLayout