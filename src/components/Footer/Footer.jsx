import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();
  return (
     <footer className="bg-gray-800 text-white  w-full ">
        <div className="flex justify-between w-full flex-col lg:flex-row lg:py-20 lg:px-15 px-5">

            <div className="flex flex-col gap-5 py-5 lg:py-0 w-full lg:w-1/3">
                <div>
                    <h3 className="text-xl font-semibold">BETABLOG</h3>
                </div>
                <div>
                    <p className="text-sm lg:w-52 text-gray-500">Our community outreach programs are designed to create positive change and foster unity.</p>
                </div>
                <div className="mt-3">
                    <p><span className="font-semibold">Email:</span>abcd@gmail.com</p>
                    <p><span className="font-semibold">Phone:</span>+91-9999999999</p>
                    <p className="font-semibold">Registered Charity 50123</p>
                </div>
            </div>

            <div className="flex flex-col gap-5 lg:w-1/3 py-10 lg:py-0">
                <div>
                    <h3 className="text-xl font-semibold">Get Monthly Updates</h3>
                </div>
                <div className="flex flex-col gap-7">
                    <div className="flex flex-col gap-5 ">
                        <label className="text-xl font-thin " htmlFor="email ">Enter your email here *</label>
                        <input className="border-b outline-0 " type="text" name="email" id='email'/>
                    </div>
                    <button onClick={() => navigate('/signin')} className="border py-2 text-white bg-black font-semibold">Sign Up!</button>
                </div>
            </div>

            <div className="lg:w-1/3 lg:pl-20 py-10 lg:py-0 items-center lg:items-start flex flex-col gap-5">
                <div>
                    <h3 className="text-xl font-semibold ">Quick Links</h3>
                </div>
                <ul className="flex flex-col gap-3 items-center lg:items-start">
                    <li><Link to={'/newest'}>Newest</Link></li>
                    <li><Link to={'/contact'}>Contact us</Link></li>
                    <li><Link to={'https://www.instagram.com/rahulpatle567/'}>Instagram</Link></li>
                    <li><Link to={'https://www.linkedin.com/in/rahul-patle-7a39ab281/'}>LinkedIn</Link></li>
                    
                </ul>
            </div>
        </div>


        <div className="flex bg-black font-thin flex-col lg:flex-row items-center  lg:items-start justify-around">
            <div>©2026 by BETABLOG</div>
            <div>
                <span>Terms & Conditions|</span>
                <span>Privacy Policy|</span>
                <span>Accessibility Statement</span>
            </div>
        </div>
    </footer>

  )
}

export default Footer