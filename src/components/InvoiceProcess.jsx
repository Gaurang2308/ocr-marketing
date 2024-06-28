import React from 'react'

const InvoiceProcess = () => {
    return (
        <div className='container mx-auto py-16'>
            <div className='text-center'>
                <h1 className='font_Poppins text-[30px] font-semibold py-10'>The Docu Transcribe Invoice Way: Email2ERP</h1>
            </div>
            <div className='grid grid-cols-2 gap-20'>
                <div>
                    <img src='images/Group 298.svg' alt='img'></img>
                </div>
                <div className='font_Heebo text-[#1E1E1E] flex flex-col gap-10 py-10 text-justify'>
                    <p>
                        Docu Invoice helps to streamline and automate the invoice processing journey. Invoices can be ingested directly from emails and accurate data capture powers the straight through invoice processing.

                    </p>
                    <p>
                        The verification and approval process ensures that the invoice data matches with business data points and automatically routes to the right people at different stages of Account Payable(AP).
                    </p>
                    <p>
                        Docu Invoice APIs provide a seamless integration with ERP, CRM and other core systems making it a zero-touch system from email receipt to payment processing. The core AI algorithms help address the complex scenarios like scanned quality issues, multi-page, multi-line table extraction and innumerable variations depending on the industry, business or type of expense.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default InvoiceProcess