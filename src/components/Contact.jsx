import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c0af8ad1-4c02-49f0-850f-8e289acf0bc3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <motion.div 
    initial={{opacity:0, x:-100}}
    transition={{duration: 1}}
    whileInView={{opacity:1, x:0}}
    // viewport={{once:true}} 
    className='container w-full mx-auto py-8 md:px-20 lg:px-32' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact<span className='underline underline-offset-4 decoration-1 font-light px-2'>With Us</span></h1>
      <p className='max-w-80 mx-auto text-gray-500 mb-8 text-center'>Ready to Make a Move? Let's Build Your Future Together</p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8 px-4'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-[50%] '>Your Name
                <input type="text" className='w-full border border-gray-300 rounded px-4 py-2 mt-2 outline-hidden' name="Name" placeholder='Enter your name' required/>
            </div>
            <div className='w-full md:w-[50%] md:pl-4'>Your Email
                <input type="email" className='w-full border border-gray-300 rounded px-4 py-2 mt-2 outline-hidden' name="Email" placeholder='Enter your email' required/>
            </div>
        </div>
        <div className='my-6 '>
            Message
            <textarea className='w-full h-48 border border-gray-300 rounded py-3 px-4 mt-2 outline-hidden' name="Message" placeholder='Your Message' required></textarea>
        </div>
        <div className='text-center mb-8'>
            <button className='bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 py-2 rounded cursor-pointer'>{result ? result : 'Send Message'}</button>
        </div>
      </form>
    </motion.div>
  )
}

export default Contact
