import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import BlogContext from '../context/blogContext'
import { nanoid } from 'nanoid'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import instance from '../config/config'

const UpdateBlog = () => {

  
 const navigate = useNavigate()
  const {id} = useParams();
  const {data,setData} = useContext(BlogContext);
  const blog = data.find((b) => b._id === id)
  console.log(blog)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()



const updateBlog = async (formData) => {
  try {

    const res = await instance.patch(`/blogs/${id}`, {
      withCredentials: true,
      title: formData.title,
      imageUrl: formData.imageURL, 
      details: formData.details,
    });

    setData(prev =>
      prev.map(blog =>
        blog._id === id ? res.data : blog
      )
    );

    toast.success('Blog updated successfully');
    navigate('/newest');

  } catch (error) {
    console.log(error);
  }
};




if(!blog){
    return (
    <div className="min-h-screen flex items-center justify-center">
      Loading...
    </div>
  );
}
  
  
  return (
     <div className="min-h-screen bg-[#F8FAFC] flex flex-col gap-3 items-center justify-center p-6">
      <h1 className='text-3xl font-extrabold'>Update Blog</h1>
      <form  onSubmit={handleSubmit(updateBlog)}  className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-4">

        {/* Title */}
        <div>
          <label className="block text-[#0F172A] font-semibold mb-1">Title</label>
          <input
            type="text"
            {...register('title',{required:true})}
            defaultValue={blog.title}
            placeholder="Enter title"
            className="w-full border rounded-lg px-3 py-2 text-[#334155] placeholder-[#94A3B8] 
            focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
        </div>

        {/* Date */}
        {/* <div>
          <label className="block text-[#0F172A] font-semibold mb-1">Date</label>
  <input
    type="date"
    {...register("date")}
    defaultValue={new Date().toISOString().split("T")[0]}
    className="w-full border rounded-lg px-3 py-2 text-[#334155] 
    focus:outline-none focus:ring-2 focus:ring-[#2563EB]" readOnly
  />
        </div> */}

        {/* Image URL */}
        <div>
          <label className="block text-[#0F172A] font-semibold mb-1">Image URL</label>
          <input
            type="text"
            {...register('imageURL',{required:true})}
            defaultValue={blog.imageUrl}
            placeholder="Enter image URL"
            className="w-full border rounded-lg px-3 py-2 text-[#334155] placeholder-[#94A3B8] 
            focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
        </div>

        {/* Details */}
        <div>
          <label className="block text-[#0F172A] font-semibold mb-1">Details</label>
          <textarea
            placeholder="Enter details..."
            {...register('details',{required:true})}
            defaultValue={blog.details}
            className="w-full border rounded-lg px-3 py-2 text-[#334155] placeholder-[#94A3B8] 
            h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          ></textarea>
        </div>

        {/* Author */}
        {/* <div>
          <label className="block text-[#0F172A] font-semibold mb-1">Author</label>
          <input
            type="text"
            {...register('author')}
            defaultValue={blog.author}
            placeholder="Author name"
            className="w-full border rounded-lg px-3 py-2 text-[#334155] placeholder-[#94A3B8] 
            focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
        </div> */}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#2563EB]  text-white py-2 rounded-lg font-semibold 
          hover:bg-[#1D4ED8] transition-all"
        >
          Update
        </button>
        <ToastContainer/>

      </form>
    </div>
  )
}

export default UpdateBlog