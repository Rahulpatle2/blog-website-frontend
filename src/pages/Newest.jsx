import React, { useContext } from 'react'
import Blog from '../components/Blog/Blog.jsx'
import BlogContext from '../context/blogContext.js'
import { useAuth } from '../context/AuthContextProvider.jsx'


const Newest = () => {
  const {data} = useContext(BlogContext)
  
  return (
    <div className='w-full flex  justify-center min-h-[80vh]'>
      {data.length > 0 ? (
        <div className='grid w-[90%] mt-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3'>
          {data.map((d) => (
            <Blog key={d._id} data={d} />
          ))}
        </div>
      ) : (
        "No Blog Found"
      )}
    </div>

  )
}

export default Newest