import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BlogContext from '../../context/blogContext.js';
import instance from '../../config/config.js';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContextProvider.jsx';
import {motion} from 'motion/react'




const Blog = ({data}) => {
 

  const{user} = useAuth()
  
  const {setData} = useContext(BlogContext);
  const navigate = useNavigate();
  const[isExpended,setIsExpended] = useState(false)
 

  const filteredBlogs = async () => {
    try {
      await instance.delete(`blogs/${data._id}`,{
        
         withCredentials: true,
        
      });
      setData((prev) => prev.filter((item) => item._id !== data._id));
      
      toast.success("Deleted successfully");
      navigate("/newest", { replace: true });
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

 
  return  (
   <motion.div
    initial={{opacity:0, scale:1}} 
    animate={{opacity:1}}
    transition={{duration:0.3}}
    whileHover={{scale:0.9,transition:{duration:0.1},boxShadow:2}}
    className="max-w-3xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-2xl">

  <div className="flex flex-col md:flex-row gap-6 cursor-pointer">

    {/* Left Content */}
    <div className="flex-1">
      <p className="text-xs sm:text-sm text-gray-500">
        Published on {data.date}
      </p>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2 leading-snug">
         {data.title}
      </h2>

      <p className="text-gray-700 mt-3 text-sm sm:text-base leading-relaxed">
        {isExpended 
  ? data?.details 
  : (data?.details ?? "").split(" ").slice(0, 10).join(" ") + "..."}
{" "}
{!isExpended && (
  <button 
    className="text-blue-600 font-semibold cursor-pointer"
    onClick={() => navigate(`/blog/${data?._id}`)}>
    Read More
  </button>
)}
      </p>
    </div>

    {/* Right Image */}
    <div className="w-full md:w-1/3">
      {data.imageUrl && (
        <img src={data.imageUrl}
        
        alt="Article thumbnail"
        className="rounded-xl shadow-sm w-full h-48 sm:h-40 object-cover"
      />
      )

      }
    </div>

  </div>

  {/* Footer */}
  <div className="mt-6">
    <p className="text-gray-600 text-xs sm:text-sm">
      Written by <span className="font-semibold text-blue-600">{data.author?.username}</span> — Tech & Web Development Blogger.
    </p>
  </div>
{user ? (     <button onClick={() => filteredBlogs()} className='px-4 mt-2 py-2 bg-red-400 text-md text-white rounded-xl cursor-pointer hover:border hover:border-red-400 hover:bg-white hover:text-red-400'>Delete</button>
):""}
         
</motion.div>
  
  ) 
}

export default Blog