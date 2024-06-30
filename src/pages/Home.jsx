import React from 'react'
import HeroSection from '../components/HeroSection'
import InvoiceProcessingSection from '../components/InvoiceProcessingSection'
import InvoiceProcess from '../components/InvoiceProcess'
import CardComponent from '../components/CardComponent'
import InvoicePresenting from '../components/InvoicePresenting'
import EnterPrise from '../components/EnterPrise'
import Docu2Api from '../components/Docu2Api'
import SignupForm from '../components/SignupForm'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <HeroSection />
            <InvoiceProcessingSection />
            <InvoiceProcess />
            <CardComponent />
            <InvoicePresenting />
            <EnterPrise />
            <Docu2Api />
            <SignupForm />
            <Footer />
        </>
    )
}

export default Home