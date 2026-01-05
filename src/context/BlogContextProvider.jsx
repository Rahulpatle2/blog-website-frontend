import { useState } from 'react'
import BlogContext from './blogContext'
import { useEffect } from 'react';
import instance from '../config/config';

const BlogContextProvider = ({children}) => {
    const [data,setData] = useState([]);
    const[toggler,setToggler] = useState(true);

  
  
    useEffect(() => {
    
   
      const fetchBlogs = async() =>{
          try {
            const res = await instance.get('/blogs/');
           
            setData(res.data.blogs)
           
          } catch (error) {
            console.log('Error:',error)
          }
      }
      fetchBlogs()
   
  }, []);
  
  return (
    <BlogContext.Provider value={{toggler,setToggler,data,setData}}>
        {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider