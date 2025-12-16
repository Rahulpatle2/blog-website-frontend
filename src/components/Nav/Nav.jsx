import React from 'react'
import { Link,NavLink } from 'react-router-dom' 
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate();
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
        <select
      className="lg:hidden border my-5 w-[90%] rounded px-2 h-10 shadow-[inset_3px_3px_6px_0px_rgb(204,219,232),inset_-3px_-3px_6px_1px_rgba(255,255,255,0.5)]"
      onChange={(e) => navigate(e.target.value)}
    >
      <option value="/newest">Newest</option>
      <option value="/contact">Contact</option>
      <option value="/createBlog">CreateBlog</option>
    </select>

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
            <li className='text-[#1E293B]'>
                <NavLink className={({isActive}) => isActive?"text-[#2563eb]":""} to={'/createBlog'}>
                    Create Blog
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav