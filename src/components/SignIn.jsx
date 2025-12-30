import React from 'react'
import BackgroundImage from '../assets/form-background.png'
import { useFormDetail } from './custom/customHook.js';
import instance from '../config/config.js';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    
    const { email, setEmail, password, setPassword } = useFormDetail();
    const navigate = useNavigate()
    const LoginUser = async (e) => {
        e.preventDefault();
        try {

            const res = await instance.post('/users/login', {
                
                email: email,
                password: password
            });
            console.log(res.data);
            
            navigate('/');
        } catch (error) {
            console.error(error);
        }

    }

    

    
    // console.log(email);
    // useEffect(() =>{
    //     const UserLoggedIn = async() =>{
    //        const receivedToken = document.cookie('token')
    //     }
    // })

    
    
    return (
        <div className=' w-screen h-screen relative flex items-center justify-center'>
           
            <form onSubmit={LoginUser} className='w-96  bg-amber-50 rounded-xl shadow-md p-5' action="" method="get">
                <h1 className='text-2xl font-semibold text-center'>Welcome Back!</h1>
                
                <div className='flex flex-col gap-2 py-2'>
                    <label className='font-semibold' htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='border rounded px-2 py-1 outline-0' type="email" name="email" id="email" placeholder='joe@gmail.com' />
                </div>

                <div className='flex flex-col gap-2 py-2'>
                    <label className='font-semibold' htmlFor="password">Password</label>
                    <input value={password}  onChange={(e) => setPassword(e.target.value)} className='border rounded px-2 py-1 outline-0' type="password" name="password" id="password" placeholder='****' />
                </div>

                <button type='submit' className='text-center px-4 py-1.5 shadow-lg bg-[#2563EB] text-white font-semibold rounded-md my-4 cursor-pointer hover:text-[#2563EB] hover:bg-white hover:border-[#2563EB]'>SignIn</button>
                
                 <div onClick={() => navigate('/signup')} className='text-blue-500 underline cursor-pointer'>New user? register here!</div>
            </form>
        </div>
    )
}

export default SignIn