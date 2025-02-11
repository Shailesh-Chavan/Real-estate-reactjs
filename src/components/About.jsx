import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x:-100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x:0}}
    // viewport={{once: true}}
    className='container w-full mx-auto flex flex-col items-center justify-center p-14 md:px-20 lg:px32 overflow-hidden ' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span></h1>
        <p className='max-w-80 text-gray-500 mb-8 text-center'>Passionate About Properties, Dedicated to Your Vision</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} className='w-full md:w-[50%] max-w-lg' alt=""/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full '>
                    <div>
                        <p className='text-4xl font-medium text-gray-700'>10+</p>
                        <p>Years of Experience</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-700'>12+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-700'>20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-700'>25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                <p className='my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam provident porro minus quasi dolores distinctio pariatur incidunt tempore. Autem accusantium laboriosam inventore eius nam sapiente quos perspiciatis consequatur aut labore.</p>
                <button className='bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-8 py-2 rounded cursor-pointer'>Learn more</button>
            </div>
        </div>
    </motion.div>
  )
}

export default About
