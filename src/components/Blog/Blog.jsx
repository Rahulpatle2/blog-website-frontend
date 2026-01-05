import { lazy, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BlogContext from '../../context/blogContext.js';
import instance from '../../config/config.js';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContextProvider.jsx';
import { motion } from 'motion/react'




const Blog = ({ data }) => {


  const { user } = useAuth()

  const { setData } = useContext(BlogContext);
  const navigate = useNavigate();
  const [isExpended, setIsExpended] = useState(false)


  const filteredBlogs = async () => {
    try {
      await instance.delete(`blogs/${data._id}`, {

        withCredentials: true,

      });
      setData((prev) => prev.filter((item) => item._id !== data._id));

      toast.success("Deleted successfully");
      navigate("/newest", { replace: true });
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };


  return (
    <motion.div initial={{x:-100,opacity:0,scale:1}} layout={lazy} animate={{x:0,opacity:1}} whileHover={{scale:1.05,transition:0.3}} whileInView={{x:0,opacity:1}} transition={{duration:0.3}} className=" px-8 py-8 text-white rounded-xl shadow-gray-500 shadow-md">
      {/* <!-- image --> */}
      <div className="h-52  overflow-hidden rounded-xl mb-5">
        <img className="w-full h-full object-cover" src={data?.imageUrl} loading='lazy' alt="blog image"></img>
      </div>

      {/* <!-- content --> */}
      <div>
        <div className="text-sm flex gap-2 text-gray-500">
          <p >{data?.author?.username}</p>
          <p>{data?.date?.toString()?.slice(0,10)}</p>
        </div>

        <h3 className="text-xl font-semibold">{data?.title}</h3>

        <p className="text-md text-gray-200  font-thin ">{isExpended
          ? data?.details
          : (data?.details ?? "").split(" ").slice(0, 20).join(" ") + "..."}
          {" "}
          </p>
          {!isExpended && (
            <button
              className="text-blue-600 font-semibold cursor-pointer"
              onClick={() => navigate(`/blog/${data?._id}`)}>
              Read More
            </button>
          )}

          <br />
        {user ? (<button onClick={() => filteredBlogs()} className=" outline-1 outline-white px-3 py-1 text-md rounded-xl mt-5 hover:outline-none hover:bg-white hover:text-black cursor-pointer">Delete</button>):""}
      </div>

    </motion.div>
  )
}

export default Blog