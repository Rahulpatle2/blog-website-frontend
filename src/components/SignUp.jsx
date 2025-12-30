import React, { useState } from 'react'
import BackgroundImage from '../assets/form-background.png'
import { useAuth } from '../context/AuthContextProvider'
import { useFormDetail } from './custom/customHook.js';
import instance from '../config/config.js'
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const { username, setUsername, email, setEmail, password, setPassword } = useFormDetail();
    const navigate = useNavigate()
    const signupUser = async (e) => {
        e.preventDefault()
        try {

            const res = await instance.post('/users/register', {
                username: username,
                email: email,
                password: password
            });

            console.log(res.data);
            navigate('/signin')
        } catch (error) {
            console.error(error);
        }

    }
    return (
        <div className=' w-screen h-screen relative flex items-center justify-center'>
            
            <form onSubmit={signupUser} className='w-96  bg-amber-50 rounded-xl shadow-md p-5' action="" method="get">
                <h1 className='text-2xl font-semibold text-center'>Please SignUp!</h1>
                <div className='flex flex-col gap-1 py-2'>
                    <label className='font-semibold' htmlFor="username">Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} id='username' className='border rounded px-2 py-1 outline-0' name='Username' type="text" placeholder='joe@123' />
                </div>

                <div className='flex flex-col gap-2 py-2'>
                    <label className='font-semibold' htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}  className='border rounded px-2 py-1 outline-0' type="email" name="email" id="email" placeholder='joe@gmail.com' />
                </div>

                <div className='flex flex-col gap-2 py-2'>
                    <label className='font-semibold' htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='border rounded px-2 py-1 outline-0' type="password" name="password" id="password" placeholder='****' />
                </div>

                <button type='submit' className='text-center px-4 py-1.5 shadow-lg bg-[#2563EB] text-white font-semibold rounded-md my-4 cursor-pointer hover:text-[#2563EB] hover:bg-white hover:border-[#2563EB]'>SignUp</button>

                <Link to={'/signin'} className='text-blue-500 underline my-3 font-medium block'>already have an Account?</Link>

            </form>
        </div>
    )
}

export default SignUp