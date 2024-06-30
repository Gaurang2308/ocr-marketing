import React from 'react';
import { FiAlertTriangle, FiLoader, FiRefreshCw } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { LuRotateCw } from 'react-icons/lu';



const InvoicePresenting = () => {
  return (
    <div className='container mx-auto py-16'>
        <h1 className='font_Poppins text-center text-3xl font-bold mb-8'>Presenting the Docu Transcribe Invoice</h1>
        <div className='grid grid-cols-3 gap-8 '>
            <div className='flex flex-col gap-2 text-center items-center'>
                <div>
                    <FiLoader className='text-[#FFB764] text-[40px]' />
                </div>
                <div>
                    <h3 className='font_Poppins font-bold'>Automated Process</h3>
                    
                </div>
                <div>
                    <p className='font_Heebo text-[#000000] opacity-60'>An intelligent solution to fully automate manual, error-prone data entry processes</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 text-center items-center'>
                <div>
                    <FiLayers className='text-[#FFB764] text-[40px]' />
                </div>
                <div>
                    <h3 className='font_Poppins font-bold'>Scalable Solution</h3>
                    
                </div>
                <div>
                    <p className='font_Heebo text-[#000000] opacity-60'>A highly scalable solution to significantly improve processing time, speed and costing</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 text-center items-center'>
                <div>
                    <FiAlertTriangle className='text-[#FFB764] text-[40px]' />
                </div>
                <div>
                    <h3 className='font_Poppins font-bold'>Eliminate Errors</h3>
                    
                </div>
                <div>
                    <p className='font_Heebo text-[#000000] opacity-60'>Automation of accounts payable to eliminate payment errors and late payments</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 text-center items-center'>
                <div>
                    <BiLike className='text-[#FFB764] text-[40px]' />
                </div>
                <div>
                    <h3 className='font_Poppins font-bold'>Operational Efficiency</h3>
                    
                </div>
                <div>
                    <p className='font_Heebo text-[#000000] opacity-60'>Operation costs reduced by 60% along with real-time processing of invoices</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 text-center items-center'>
                <div>
                    <LuRotateCw className='text-[#FFB764] text-[40px]' />
                </div>
                <div>
                    <h3 className='font_Poppins font-bold'>Faster Processing</h3>
                    
                </div>
                <div>
                    <p className='font_Heebo text-[#000000] opacity-60'>Improve efficiency by reducing invoice processing time by 80%</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 text-center items-center'>
                <div>
                    <FiRefreshCw className='text-[#FFB764] text-[40px]' />
                </div>
                <div>
                    <h3 className='font_Poppins font-bold'>Human in Loop Capability</h3>
                    
                </div>
                <div>
                    <p className='font_Heebo text-[#000000] opacity-60'>With human in the loop operation, it ensures systematic exception handling which reduces errors and optimizes human efforts</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default InvoicePresenting
