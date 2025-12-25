import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom' 
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContextProvider';

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

            <input className='hidden h-8 p-2 rounded lg:block border outline-0 ' type="text" placeholder='Search...'/>
            
        </div>
        <div className='h-px my-2 w-full bg-gray-500'></div>
        {/* <select
      className="lg:hidden border my-5 w-[90%] rounded px-2 h-10 shadow-[inset_3px_3px_6px_0px_rgb(204,219,232),inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5)]"
      onChange={(e) => navigate(e.target.value)}
    >
      <option value="/newest">Newest</option>
      <option value="/contact">Contact</option>
      <option value="/createBlog">CreateBlog</option>
    </select> */}
        <div className=' lg:hidden w-full flex flex-col items-center'>
            <div onClick={() => setToggle(!toggle)} className='shadow-md w-[90%] relative py-2 px-2 rounded-lg '>Menu <span className='absolute right-2'>{toggle ? (<i className="fa-solid fa-angle-down"></i>):(<i className="fa-solid fa-angle-right"></i>)}</span></div>
           
            <div className={`flex flex-col shadow-lg w-[90%] mt-2 gap-2 px-2 py-2 top-25 bg-gray-100 ${toggle ? 'absolute':'hidden'}`}>
                <NavLink  to={'/'} className={({isActive}) => isActive ? 'bg-blue-500 text-white px-1':""}>Newest</NavLink>
                <NavLink to={'/contact'} className={({isActive}) => isActive ? 'bg-blue-500 text-white px-1':""} >Contact us</NavLink>
                {user && <NavLink to={'/create-blog'} className={({isActive}) => isActive ? 'bg-blue-500 text-white px-1':""} >Create Blog</NavLink>}
            </div>
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