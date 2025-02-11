import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:-100}}
    transition={{duration: 1}}
    whileInView={{opacity:1, x:0}}
    // viewport={{once:true}}
    className='container w-full mx-auto py-10 md:px-20 lg:px32 overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer<span className='underline underline-offset-4 decoration-1 font-light px-2'>Testimonials</span></h1>
      <p className='max-w-80 mx-auto text-gray-500 mb-8 text-center'>Real Stories from Those Who Found Home with Us</p>

      <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
        {testimonialsData.map((testimonial, index) =>(
            <div key={index} className='max-w-[320px] border border-gray-300 shadow-lg rounded px-8 py-12 text-center'>
                <img src={testimonial.image} className='mb-4 mx-auto' alt={testimonial.alt} />
                <h2 className=' text-gray-700 font-medium text-xl'>{testimonial.name}</h2>
                <p className='text-sm'>{testimonial.title}</p>
                <div className='flex justify-center gap-0.5 py-4'>
                    {Array.from({length: testimonial.rating}, (item, index)=>(
                        <img key={index} src={assets.star_icon} alt="rating" />
                    ))}
                </div>
                <p className='text-gray-600'>{testimonial.text}</p>
            </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
