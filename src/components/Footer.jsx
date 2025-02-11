import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='w-full mx-auto px-4 pt-7 md:px-20 lg:px-32 bg-gray-900 overflow-hidden' id='Footer'>
      <div className='container flex flex-col md:flex-row justify-between items-start '>
        <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <img src={assets.logo_dark} alt="" />
            <p className='text-gray-400 mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, velit. Ipsa repellendus aliquid rerum dolor minima, impedit quisquam ad at!</p>
        </div>
        <div className='w-full md:w-1/5 mb-6 md:mb-0'>
            <h3 className='text-lg text-white font-bold'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400 mt-4'>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About us</a>
                <a href="#Contact" className='hover:text-white'>Contact us</a>
                <a href="#" className='hover:text-white'>Privacy policy</a>
            </ul>
        </div>
        <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h3 className='text-lg text-white font-bold'>Subscribe to our newsletter</h3>
            <p className='text-gray-400 mt-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <form>
              <div className='flex gap-2 mt-2'>
                  <input type="email" className='w-full md:w-auto bg-gray-700 text-gray-400 rounded p-2 focus:outline-none' placeholder='Enter your email' required/>
                  <button className='bg-blue-500 rounded hover:bg-blue-600 active:bg-blue-700 text-white py-2 px-4 cursor-pointer '>Subscribe</button>
              </div>  
            </form>
        </div>
      </div>
      <div className='text-gray-500 border-t border-gray-700 mt-5 md:mt-10 py-3 text-sm text-center'>
        Copyright 2025 &copy; LearnCode | All Right Reserved.
      </div>
    </div>
  )
}

export default Footer
