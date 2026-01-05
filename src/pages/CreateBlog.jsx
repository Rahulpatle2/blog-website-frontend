import { useContext, useState } from 'react'
import BlogContext from '../context/blogContext.js'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import instance from '../config/config.js'
import { motion } from 'motion/react'


const CreateBlog = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState('');
  const [details, setDetails] = useState('');
  const { setData } = useContext(BlogContext);



  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await instance.post('/blogs/create-blog', 
        {
          withCredentials: true,
          
        title: title,
        imageUrl: imageUrl,
        details: details,
        })


      setData((prev) => [...prev, res.data])
      toast.success(res.data.message)
      navigate('/newest');
    } catch (error) {
      console.log('Error:', error.message)
      toast.error(error);
    }

  }


  return (
    <motion.div
    initial={{opacity:0, scale:1}} 
    animate={{opacity:1}}
    transition={{duration:0.3}}
     className="min-h-screen bg-black text-white flex flex-col gap-3 items-center justify-center p-6">
      <h1 className='text-3xl font-extrabold mb-5'>Create Blog</h1>
      <form onSubmit={submitHandler} className="w-full max-w-md bg-gray-800 shadow-lg rounded-2xl p-6 space-y-4">


        <div>
          <label className="block  font-semibold mb-1">Title</label>
          <input
            type="text"

            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="w-full border rounded-lg px-3 py-2  placeholder-[#94A3B8] 
            focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
        </div>


       

        <div>
          <label className="block  font-semibold mb-1">Image URL</label>
          <input
            type="text"

            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
            className="w-full border rounded-lg px-3 py-2  placeholder-[#94A3B8] 
            focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
        </div>


        <div>
          <label className="block  font-semibold mb-1">Details</label>
          <textarea
            placeholder="Enter details..."

            onChange={(e) => setDetails(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 placeholder-[#94A3B8] 
            h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          ></textarea>
        </div>


       

        <button
          type="submit"
          className="w-full bg-[#2563EB] text-white py-2 rounded-lg font-semibold 
          hover:bg-[#1D4ED8] transition-all"
        >
          Create
        </button>
        <ToastContainer />

      </form>
    </motion.div>
  )
}

export default CreateBlog