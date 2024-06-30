import React from 'react'
import { LiaFileSolid } from 'react-icons/lia'

const CardComponent = () => {
    return (
        <div className='bg-card-background bg-cover py-16'>
            <div className='container mx-auto'>

                <div className='text-center'>
                    <h2 className='font_Poppins text-3xl font-semibold mb-4'>CDR Graph Technology</h2>
                    <p className='font_Heebo'>Magic Invoice's CDR (Cognitive Data Relationship) Graph Technology is powered by 5 algorithms</p>
                </div>
                <div className='grid grid-cols-3 my-10 gap-8'>
                    <div className='bg-white p-6 rounded shadow-md' >
                        <div className='font_Poppins '>
                            <h2 className='text-xl font-bold'>CQE</h2>
                            <span className='text-sm font-semibold'>Contextual Quality Enhancer</span>
                        </div>
                        <div>
                            <p className='font_Heebo text-[12px] pt-4 pr-10 pb-4'>Our proprietary AI model enhances quality of the documents across multiple quality parameters allowing better extraction accuracy and document coverage</p>
                        </div>
                        <div className='absolute'>
                            <div className='h-[50px] w-[50px] bg-[#F1EAFF] flex items-center justify-center rounded-[50%]'>
                                <LiaFileSolid className='text-[#9F77EB] text-[25px]' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white p-6 rounded shadow-md' >
                        <div className='font_Poppins '>
                            <h2 className='text-xl font-bold'>CDI</h2>
                            <span className='text-sm font-semibold'>CDI Contextual Document Identifier</span>
                        </div>
                        <div>
                            <p className='font_Heebo text-[12px] pt-4 pr-10 pb-4'>Our proprietary AI pipeline to intelligently improve, classify/identify invoices from the incoming documents across various formats and quality standards</p>
                        </div>
                        <div className='absolute'>
                            <div className='h-[50px] w-[50px] bg-[#F1EAFF] flex items-center justify-center rounded-[50%]'>
                                <LiaFileSolid className='text-[#9F77EB] text-[25px]' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white p-6 rounded shadow-md relative' >
                        <div className='font_Poppins '>
                            <h2 className='text-xl font-bold'>CDC</h2>
                            <span className='text-sm font-semibold'>Contextual Document Capture</span>
                        </div>
                        <div>
                            <p className='font_Heebo text-[12px] pt-4 pr-10 pb-4'>Our proprietary AI model enhances quality of the documents across multiple quality parameters allowing better extraction accuracy and document coverage</p>
                        </div>
                        <div className='absolute'>
                            <div className='h-[50px] w-[50px] bg-[#F1EAFF] flex items-center justify-center rounded-[50%]'>
                                <LiaFileSolid className='text-[#9F77EB] text-[25px]' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardComponent