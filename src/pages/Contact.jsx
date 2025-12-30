
import React from 'react'
import instance from '../config/config';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'motion/react';



const Contact = () => { 

  const [name,setName] = useState("");
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("");

  const submitHandler = async(e) =>{
    try {
      e.preventDefault()
      const res = await instance.post('/send-email',{
        name:name,
        email:email,
        message:message
      });
  
      console.log(res.data);
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <motion.div
    initial={{opacity:0, scale:1}} 
    animate={{opacity:1}}
    transition={{duration:0.5}}
     className='lg:w-[90%] w-full lg:px-18 md:h-full lg:min-h-[80vh]'>
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-8">

        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] text-center mb-3">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Have questions or want to work together? Fill the form below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-[#0F172A] mb-2">📍 Address</h2>
              <p className="text-gray-600">123 Street, City, Country</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#0F172A] mb-2">📧 Email</h2>
              <p className="text-gray-600">contact@example.com</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#0F172A] mb-2">📞 Phone</h2>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#0F172A] mb-2">🌐 Follow Us</h2>
              <div className="flex space-x-4 text-2xl text-blue-600">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form onSubmit={submitHandler} className="space-y-5">
            <div>
              <label className="block text-[#0F172A] font-semibold mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-[#0F172A] font-semibold mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-[#0F172A] font-semibold mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default Contact