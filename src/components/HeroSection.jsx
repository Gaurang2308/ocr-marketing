import React from 'react'

const HeroSection = () => {
    return (
        <div>
            <div className='bg-hero-img h-[65vh] w-full bg-cover bg-center'>
                <div className='font_Poppins flex justify-center items-center flex-col h-[100%]'>
                    <div className='font-bold text-[50px] text-[#9F77EB] '>
                        Invoice OCR
                    </div>
                    <div className='font_Poppins font-bold text-[50px] text-center leading-tight w-[600px]'>
                        AI-Powered Document Automation
                    </div>
                    <div className='font_Heebo w-[550px] text-center font-thin text-[#000000] py-4 opacity-[60%]'>
                        It makes document processing so unbelievably easy for the Transportation and Manufacturing Industry, that we had to call it
                    </div>
                </div>
            </div>
            <div className='bg-[#2c1e59] h-[25vh] w-full flex flex-col gap-4 text-center align-center justify-center'>
                <p className='font_Heebo px-24 text-[#FFFFFF] '>
                    The world's first NO TOUCH automated invoice processing system with our proprietary CDR Graph TechnologyTM that enables you to handle variation and complexity with ease. This makes document processing so unbelievably easy that we simply had to call it Magic Invoice.
                </p>
                <div className='flex gap-4 items-center justify-center font_Heebo'>
                    <button className='w-40 h-10 text-[#9F77EB] border-solid border-[1px] rounded border-[#9F77EB] font-medium '>How it Works</button>
                    <button className='w-40 h-10 text-[#FFFFFF] bg-[#9F77EB] px-5 py-1 rounded text-sm'>Talk to an Expert</button>
                </div>
            </div>
        </div >
    )
}

export default HeroSection