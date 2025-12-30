import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom' 
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContextProvider';
import { AnimatePresence, motion } from 'motion/react';

const Nav = () => {
    const navigate = useNavigate();
    const {user} = useAuth()
    const [toggle,setToggle] = useState(false);
  return (
    <nav className='flex flex-col items-center'>
        <div className='lg:flex lg:py-3 justify-between items-center lg:w-[90%]'>
            <div className='lg:mb-2'>
                <span className='text-[#2563eb] lg:text-5xl  text-4xl font-extrabold'>BETA </span>
                <span className='text-4xl lg:text-5xl text-gray-600'>Blog</span>
            </div>

            <button onClick={() => navigate('/signin')} className='bg-[#2563eb] hidden lg:block px-2.5 py-1 rounded text-white cursor-pointer hover:bg-white hover:text-[#2563eb] hover:outline-1  hover:outline-[#2563eb]'>SignIn</button>
            
        </div>
        <div className='h-px my-2 w-full bg-gray-500'></div>
       
        <div className=' lg:hidden w-full flex flex-col items-center'>
            <div onClick={() => setToggle(!toggle)} className='shadow-md w-[90%] relative py-2 px-2 rounded-lg '>Menu <span className='absolute right-2'>{toggle ? (<i className="fa-solid fa-angle-down"></i>):(<i className="fa-solid fa-angle-right"></i>)}</span></div>
           
            <AnimatePresence>
            <motion.div 
            initial={{ y: "-100%" }}    
            animate={{ y: 0 }}          
            exit={{ y: "-100%" }}       
            transition={{ duration:1 }} // Bouncy physics
            
            className={`flex flex-col shadow-lg w-[90%] mt-2 gap-2 px-2 py-2 top-25 bg-gray-100 ${toggle ? 'absolute':'hidden'}`}>
                <NavLink  to={'/'} className={({isActive}) => isActive ? 'bg-blue-500 text-white px-1':""}>Newest</NavLink>
                <NavLink to={'/contact'} className={({isActive}) => isActive ? 'bg-blue-500 text-white px-1':""} >Contact us</NavLink>
                {user && <NavLink to={'/create-blog'} className={({isActive}) => isActive ? 'bg-blue-500 text-white px-1':""} >Create Blog</NavLink>}
            </motion.div>
            </AnimatePresence>
        </div>
        <ul className='hidden lg:flex w-[90%] gap-6'>
            <li className='text-[#1E293B]'>
                <NavLink className={({isActive}) => isActive?"text-[#2563eb]":""} to={'/newest'}>
                    Newest
                </NavLink>
            </li>
           
            <li className='text-[#1E293B]'>
                <NavLink className={({isActive}) => isActive?"text-[#2563eb]":""} to={'/contact'}>
                    Contact
                </NavLink>
            </li>
            {user && <li className='text-[#1E293B]'>
                <NavLink className={({isActive}) => isActive?"text-[#2563eb]":""} to={'/create-blog'}>
                    Create Blog
                </NavLink>
            </li>}
        </ul>
    </nav>
  )
}

export default Nav