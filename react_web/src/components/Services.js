import React from 'react'
import image from '../images/stract.jpg'

function Services() {
  return (
    <div className='mx-auto grid md:grid-cols-4' >
        <div className='mr-3'>
        <img src={image} alt="/" />

        </div>
        <div className='mr-3'> 
        <img src={image} alt="/" />
        <h1>First Image</h1>
        </div>
        <div className='mr-3'>
        <img src={image} alt="/" />
        <h1>First Image</h1>
        </div>
        <div className='mr-3'>
        <img src={image} alt="/" />
        <h1>First Image</h1>
        </div>
        
    </div>
  )
}

export default Services