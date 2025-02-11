import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [loginSignUp, setLoginSignUp] = useState("login")

    useEffect(() =>{
        if(showMobileMenu || toggle){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
        return ()=>{
            document.body.style.overflow = 'auto'
        };
    },[showMobileMenu, toggle])

    const showSignUp = () =>{
        setToggle(true)
    }

    const hideSignUp = () =>{
        setToggle(false)
    }
  return (
    <>
        <div className='black-overlay fixed w-full h-screen mx-auto duration-700 z-20' onClick={hideSignUp}  style={{
            opacity: toggle ? 1 : 0,
            visibility: toggle ? 'visible' : 'hidden'
        }} >
            <div className='max-w-100 mx-auto  bg-white absolute rounded-2xl shadow-lg ' style={{
                left: '0%',
                right: '0%', 
                bottom: '5%'
                }} onClick={(e)=> {
                    e.stopPropagation();
            }}>
                <div className='flex justify-end p-3'>
                    <img src={assets.cross_icon} onClick={hideSignUp} className='w-5 hover:rotate-x-15 hover:-rotate-y-30 cursor-pointer' alt="close SignUp" />
                </div>
                <h1 className='text-3xl text-center '>{loginSignUp}</h1>
                <form className='w-full mx-auto text-gray-600 pt-6 px-4'>
                    <div className='flex flex-col'>
                        {loginSignUp === "Login" ? <></> : 
                            <div className='w-full mx-auto mb-4 '>
                                <p>Name</p>
                                <input type="text" name="Name" className='w-full text-sm border border-gray-300 bg-gray-50 hover:border-gray-400 rounded px-4 py-2 mt-2 outline-hidden' placeholder='Enter your name' required/>
                            </div>}
                            <div className='w-full mx-auto mb-4 '>
                                <p>Email</p>
                                <input type="email" name="Email" className='w-full text-sm border border-gray-300 bg-gray-50 hover:border-gray-400 rounded px-4 py-2 mt-2 outline-hidden' placeholder='Enter your email' required/>
                            </div>
                            <div className='w-full mx-auto mb-4 '>
                                <p>Password</p>
                                <input type="password" name="Password" className='w-full text-sm border border-gray-300 bg-gray-50 hover:border-gray-400 rounded px-4 py-2 mt-2 outline-hidden' placeholder='Password' required/>
                            </div>
                            <div className='flex items-start space-x-2 p-4 rounded-lg border border-gray-300 bg-gray-50'>
                                <input type="checkbox" className='mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500' required/>
                                <p className='text-sm text-gray-700'>By continuing, i agree to the 
                                    <a href="#" class="text-blue-600 hover:underline"> terms of use</a> &
                                    <a href="#" class="text-blue-600 hover:underline"> privacy policy</a>.
                                </p>
                            </div>
                            <div className='text-center py-2'>
                                <button className='bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-6 py-2  rounded cursor-pointer'>{loginSignUp}</button>
                            </div>
                            {
                            loginSignUp === 'Login' ? 
                            <p className='text-sm text-center py-2'>Create a new account?<span onClick={()=> setLoginSignUp("Sign Up")} className='text-sm text-blue-500 hover:text-blue-600 cursor-pointer'>Click here</span></p> : 
                            <p className='text-sm text-center py-2'>Already have an account?<span onClick={()=> setLoginSignUp("Login")} className='text-sm text-blue-500 hover:text-blue-600 cursor-pointer'>Click here</span></p>
                            }     
                    </div>
                </form>

            </div>
        </div>


    <div className='w-full absolute top-0 left-0 z-10'>
        <div className='container mx-auto flex justify-between items-center gap-7 py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                <a href="#Contact" className='cursor-pointer hover:text-gray-400'>Contact Us</a>
            </ul>
            <button onClick={showSignUp} className='hidden md:block hover:bg-slate-200 active:bg-slate-300 bg-white px-8 py-2 rounded-full cursor-pointer'>Sign up</button>
            <img src={assets.menu_icon} onClick={() => setShowMobileMenu(true)} className='md:hidden w-7 cursor-pointer' alt="menu_icon" />
        </div>

        <div className={`${showMobileMenu ? 'w-full fixed' : 'w-0 h-0'} md:hidden right-0 top-0 bottom-0 bg-white overflow-hidden transition-all duration-200`}>
            <div className='flex justify-end p-6 container mx-auto cursor-pointer'>
                <img src={assets.cross_icon} onClick={() => setShowMobileMenu(false)} className='w-6' alt="" />
            </div>
            <ul className='flex flex-col items-center gap-3 mt-5 text-lg font-medium'>
                <a href="#Header" onClick={() => setShowMobileMenu(false)} className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" onClick={() => setShowMobileMenu(false)} className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Projects" onClick={() => setShowMobileMenu(false)} className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Testimonials" onClick={() => setShowMobileMenu(false)} className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                <a href="#Contact" onClick={() => setShowMobileMenu(false)} className='cursor-pointer hover:text-gray-400'>Contact Us</a>
            </ul>

            <p class="text-gray-600 text-center text-sm py-8">
                Don't have an account? 
                <a href="#" onClick={showSignUp} class="text-blue-500 hover:text-blue-700 font-semibold">Sign up</a>
            </p>
        </div>      
    </div>
    </>
  )
}

export default Navbar
