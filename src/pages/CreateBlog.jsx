import React, { useContext, useState } from 'react'
import BlogContext from '../context/blogContext'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import instance from '../config/config'


const CreateBlog = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [imageUrl, setImageUrl] = useState('');
  const [details, setDetails] = useState('');
  const [author, setAuthor] = useState('');


  const { data, setData } = useContext(BlogContext);



  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await instance.post('/blogs/create-blog', 
        {
          withCredentials: true,
          
        title: title,
        // date: date,
        imageUrl: imageUrl,
        details: details,
        // author: author
        })


      setData((prev) => [...prev, res.data])
      toast.success()
      navigate('/newest');
    } catch (error) {
      console.log('Error:', error.message)
      toast.error(error);
    }

  }


  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col gap-3 items-center justify-center p-6">
      <h1 className='text-3xl font-extrabold'>Create Blog</h1>
      <form onSubmit={submitHandler} className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-4">


        <div>
          <label className="block text-[#0F172A] font-semibold mb-1">Title</label>
          <input
            type="text"

            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="w-full border rounded-lg px-3 py-2 text-[#334155] placeholder-[#94A3B8] 
            focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
        </div>


        {/* <div>
          <label className="block text-[#0F172A] font-semibold mb-1">Date</label>
          <input
            type="date"

            onChange={(e) => setDate(e.target.value)}
            value={date}

            className="w-full border rounded-lg px-3 py-2 text-[#334155] 
    focus:outline-none focus:ring-2 focus:ring-[#2563EB]" readOnly
          />
        </div> */}


        <div>
          <label className="block text-[#0F172A] font-semibold mb-1">Image URL</label>
          <input
            type="text"

            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
            className="w-full border rounded-lg px-3 py-2 text-[#334155] placeholder-[#94A3B8] 
            focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
        </div>


        <div>
          <label className="block text-[#0F172A] font-semibold mb-1">Details</label>
          <textarea
            placeholder="Enter details..."

            onChange={(e) => setDetails(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-[#334155] placeholder-[#94A3B8] 
            h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          ></textarea>
        </div>


        {/* <div>
          <label className="block text-[#0F172A] font-semibold mb-1">Author</label>
          <input
            type="text"

            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author name"
            className="w-full border rounded-lg px-3 py-2 text-[#334155] placeholder-[#94A3B8] 
            focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
        </div> */}


        <button
          type="submit"
          className="w-full bg-[#2563EB] text-white py-2 rounded-lg font-semibold 
          hover:bg-[#1D4ED8] transition-all"
        >
          Create
        </button>
        <ToastContainer />

      </form>
    </div>
  )
}

export default CreateBlog