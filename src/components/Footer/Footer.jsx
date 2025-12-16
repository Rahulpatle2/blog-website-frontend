import React from 'react'

const Footer = () => {
  return (
    <div className='w-full '>
       <hr className='h-px bg-gray-700 w-full'/>
        <div className='flex flex-col items-center lg:items-start lg:flex-row gap-4 p-20'>
          <div>
           <p className='text-3xl font-extrabold text-[#1E40AF]'>BETA</p>
          </div>
        <div className='text-sm flex flex-col lg:w-1/5 gap-2 items-center text-center'>
          <h3 className='font-bold'>Sign up for BETA email updates</h3>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum est sequi totam. Magnam, omnis!</p>
          <button className='bg-[#2563EB] text-white rounded px-4 py-2 w-24 cursor-pointer'>Sign Up</button>
        </div>
      </div>


        <div className='bg-gray-600 text-white p-20 font-bold w-full flex-col lg:flex-row items-center text-sm flex justify-between py-5 border'>
          <ul className='flex flex-col lg:flex-row items-center gap-3'>
            <li>BETA Talks Usage Policy</li>
            <li>Privacy Policy</li>
            <li>Advertising/Partnership</li>
            <li>BLOG.com Terms of Use</li>
            <li>Contact</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Help</li>
          </ul>

          <div>
              <span>TED Conferences,LLC</span>
          </div>
        </div>
    </div>
  )
}

export default Footer