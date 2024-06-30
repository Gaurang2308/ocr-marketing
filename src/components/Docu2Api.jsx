import React from 'react'

const Docu2Api = () => {
  return (
    <div className='container mx-auto py-16'>
      <div className='text-center'>
        <h1 className='font_Poppins text-4xl leading-loose font-bold'>Docu2API</h1>
        <p className='font_Heebo'>An AI powered, cloud-native intelligent document processing platform</p>
      </div>
      <div className='grid grid-cols-2 mt-20 px-20 gap-16'>
        <div>
            <img src='/images/docu2Api.svg' alt='img'></img>
        </div>
        <div className='font_Hebbo flex flex-col gap-8 py-16 text-justify '>
            <p>Docu2API captures contextual information from unstructured and semi structured documents. It leverages AI technologies like Computer Vision, ML/Deep learning, NLP to classify, capture, validate, and enrich information from a wide variety of documents across a variety of use cases, business functions and industry verticals.</p>
            <p>Docu2API, as the name suggests provides consumable APIs for the document type trained through the platform.</p>
        </div>

      </div>
    </div>
  )
}

export default Docu2Api
