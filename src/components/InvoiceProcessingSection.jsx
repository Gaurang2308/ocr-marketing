import React from 'react';
import { LiaFileSolid } from "react-icons/lia";
import { BsCheck2Circle } from "react-icons/bs";
import { LuShield, LuUsers } from "react-icons/lu";
import { LuZapOff } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";


const InvoiceProcessingSection = () => {
    return (
        <div className='container mx-auto py-16'>
            <div className='text-center mb-12'>
                <h1 className='font_Poppins text-3xl font-bold'>Invoice Processing Challenges</h1>
                <p className='font_Heebo text-[#1E1E1E] text-[16px] px-72 py-2'>In today’s increasingly complex world with multitude of industries and processes within them, there are several challenges that arise while processing an invoice.</p>
            </div>
            <div className='grid grid-cols-3 gap-8 mb-12'>
                <div className='flex gap-6' >
                    <div>
                        <div className='h-[50px] w-[50px] bg-[#a077eb3a] flex items-center justify-center rounded-[50%]'>
                            <LiaFileSolid className='text-[#9F77EB] text-[25px]' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font_Poppins font-semibold leading-7 text-[16px] ' >Complexity Industry specific invoicing</h2>
                        <p className='font_Heebo text-[12px]'>Invoice can be multi-line or multi-page depending on industries</p>
                    </div>
                </div>
                <div className='flex gap-6' >
                    <div>
                        <div className='h-[50px] w-[50px] bg-[#ff9f3146] flex items-center justify-center rounded-[50%]'>
                            <BsCheck2Circle className='text-[#FF9F31] text-[25px]' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font_Poppins font-semibold leading-7 text-[16px]' >Variations and Quality</h2>
                        <p className='font_Heebo text-[12px]'>Vendor variations of invoices and low quality makes it difficult to process</p>
                    </div>
                </div>
                <div className='flex gap-6' >
                    <div>
                        <div className='h-[50px] w-[50px] bg-[#ff5d7b49] flex items-center justify-center rounded-[50%]'>
                            <LuUsers className='text-[#FF5D7C] text-[25px]' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font_Poppins font-semibold leading-7 text-[16px]' >Buyer goes through</h2>
                        <p className='font_Heebo text-[12px]'>Delays in payment & duplicate of payments are routine problems that buyers face</p>
                    </div>
                </div>
                <div className='flex gap-6' >
                    <div>
                        <div className='h-[50px] w-[50px] bg-[#1ab6b638] flex items-center justify-center rounded-[50%]'>
                            <LuZapOff className='text-[#0EBA8B] text-[25px]' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font_Poppins font-semibold leading-7 text-[16px]' >Manual Errors - high degree of exceptions</h2>
                        <p className='font_Heebo text-[12px]'>TypicallyInvoice processing has a highdegree of exception handlingand is prone to manual errors</p>
                    </div>
                </div>
                <div className='flex gap-6' >
                    <div>
                        <div className='h-[50px] w-[50px] bg-[#3881ff2d] flex items-center justify-center rounded-[50%]'>
                            <LuShield className='text-[#3880FF] text-[25px]' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font_Poppins font-semibold leading-7 text-[16px]' >Risk of fraud</h2>
                        <p className='font_Heebo text-[12px]'>Loss of reputation and financially draining</p>
                    </div>
                </div>
                <div className='flex gap-6' >
                    <div>
                        <div className='h-[50px] w-[50px] bg-[#1ab6b638] flex items-center justify-center rounded-[50%]'>
                            <FiDollarSign className='text-[#1AB6B6] text-[25px]' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font_Poppins font-semibold leading-7 text-[16px]' >High costs of processing</h2>
                        <p className='font_Heebo text-[12px]'>Cost of processing an invoice and training employees</p>
                    </div>
                </div>
            </div>
            <div className='font_Heebo rounded bg-[#2B1E59] text-center text-[#FFFFFF]'>
                <p className='w-5/6 mx-auto py-5'>
                    Docu Transcribe Invoice, a truly innovative invoice processing system with our proprietary CDR Graph Technology enables you to handle these challenges with ease.

                </p>
            </div>
        </div>
    )
}

export default InvoiceProcessingSection