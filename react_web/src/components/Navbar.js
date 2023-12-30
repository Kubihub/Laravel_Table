import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mc-auto px-4'>

        <h1 className='w-full font-bold text-[#00df9a]'>React.</h1>
        <ul className=' text-[#1F1534] flex' >
            <li className='p-4'>Home</li>
            <li className='p-4'>Findadoctor</li>
            <li className='p-4'>Apps</li>
            <li className='p-4'>Testimonials</li>
            <li className='p-4'>AboutUs</li>
            
        </ul>
        <div>
            <img src='' />
        </div>
    </div>
  )
}

export default Navbar