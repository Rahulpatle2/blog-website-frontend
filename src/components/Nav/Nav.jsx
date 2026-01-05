import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContextProvider';
import { AnimatePresence, motion } from 'motion/react';

const Nav = () => {
    const navigate = useNavigate();
    const { user } = useAuth()
    const [toggle, setToggle] = useState(false);
   
    return (
        <nav className='bg-black py-4 px-2 w-full relative lg:flex lg:justify-between lg:px-15 lg:items-center'>
            <div className='flex items-center justify-between w-full lg:w-fit'>
                <div>
                    <span className='uppercase text-white text-4xl lg:text-5xl '>beta</span>
                    <span className='uppercase text-white text-4xl lg:text-5xl font-bold'>blog</span>
                </div>

                <div className='lg:hidden' onClick={() => setToggle(!toggle)}>
                    <i className="fa-solid fa-bars text-white text-3xl"></i>
                </div>
            </div>
            <AnimatePresence >
               {toggle  ?( <motion.div initial={{x:100}} animate={{x:0}} exit={{x:300}} transition={{duration:0.2}} className={`text-white  flex flex-col items-end pr-2 w-1/2 fixed z-20 bg-gray-900 right-0 top-0 h-screen `}>
                <div className='py-4'>
                    <i onClick={() => setToggle(!toggle)} className="fa-solid fa-xmark text-white text-3xl"></i>
                </div>
                <div className='w-full flex flex-col pl-10 gap-5  '>
                    <NavLink to={'/'}  className={({isActive}) => isActive ? "text-xl  transition-all duration-200 ":""}>Home</NavLink>
                    <NavLink to={'newest'} className={({isActive}) => isActive ? "text-xl transition-all duration-200":""}>Newest</NavLink>
                    <NavLink to={'contact'} className={({isActive}) => isActive ? "text-xl transition-all duration-200":""}>Contact Us</NavLink>
                    {user ? (<NavLink to={'create-blog'} className={({isActive}) => isActive ? "text-xl transition-all duration-200":""}>Create Blog</NavLink>):""}
                </div>
            </motion.div>): null}
            </AnimatePresence>
            
            <div className='hidden lg:flex items-center text-white  gap-5'>
                    <NavLink to={'/'} className={({isActive}) => isActive ? "text-lg text-blue-400":"text-lg"}>Home</NavLink>
                    <NavLink to={'newest'} className={({isActive}) => isActive ? "text-lg text-blue-400":"text-lg"}>Newest</NavLink>
                    <NavLink to={'contact'} className={({isActive}) => isActive ? "text-lg text-blue-400":"text-lg"}>Contact Us</NavLink>
                   {user ? ( <NavLink to={'create-blog'} className={({isActive}) => isActive ? "text-lg text-blue-400":"text-lg"}>Create Blog</NavLink>):""}
            </div>
            
            <div className='hidden lg:block'>
                <button onClick={() => navigate('/signin')} className='outline-1 outline-white px-4 py-1.5 rounded-md text-white bg-black hover:bg-white hover:text-black hover:outline-0 cursor-pointer'>SignIn</button>
            </div>

        </nav>
    )
}

export default Nav