import React, { useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion';

const Projects = () => {
    const [slide, setSlide] = useState(0)

    const nextSlide = () =>{
        if(projectsData.length - 3 === slide) return false
        setSlide(slide + 1)
    }

    const prevSlide = () =>{
        if(slide === 0) return false
        setSlide(slide - 1)
    }

  return (
    <motion.div 
    initial={{opacity:0, x:-100}}
    transition={{duration: 1}}
    whileInView={{opacity:1, x:0}}
    // viewport={{once:true}} 
    className='container w-full mx-auto px-6 my-20 md:px-20 lg:px-32 overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span></h1>
      <p className='max-w-80 mx-auto text-gray-500 mb-6 text-center'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

    {/* Slider buttons */}
      <div className='flex justify-end gap-3 mb-6'>
        <button onClick={prevSlide} className='bg-gray-200 active:bg-gray-300 p-3 rounded cursor-pointer'>
            <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextSlide} className='bg-gray-200 active:bg-gray-300 p-3 rounded cursor-pointer'>
            <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

    {/* Project slider */}
      <div className='overflow-hidden'>
        <div className='flex md:gap-5 lg:gap-7'>
            {projectsData.map((project, index)=> (
                <div key={index} className='w-full 
                md:w-[28%] lg:w-[29%] shrink-0 relative duration-500 ease-in-out' style={{transform: `translateX(-${slide * 100}%)`}}>
                    <img src={project.image} className='w-full h-auto mb-14' alt={project.title} />
                    <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                        <div className='bg-white shadow-lg px-2 py-2'>
                            <h2 className='font-semibold text-gray-800'>{project.title}</h2>
                            <p className='text-gray-500 text-sm'>{project.price} <span className='px-1'>|</span>{project.location}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
