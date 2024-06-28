import React from 'react'
import HeroSection from '../components/HeroSection'
import InvoiceProcessingSection from '../components/InvoiceProcessingSection'
import InvoiceProcess from '../components/InvoiceProcess'
import CardComponent from '../components/CardComponent'

const Home = () => {
    return (
        <>
            <HeroSection />
            <InvoiceProcessingSection />
            <InvoiceProcess />
            <CardComponent />
        </>
    )
}

export default Home