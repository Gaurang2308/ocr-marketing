import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MainLayout from '../layout/MainLayout/MainLayout'
import ContactUs from '../pages/ContactUs'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />} >
                    <Route index element={<Home />} />
                    <Route path='/contact-us' element={<ContactUs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router