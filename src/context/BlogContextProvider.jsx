import React, { useState } from 'react'
import BlogContext from './blogContext'
import { useEffect } from 'react';
import instance from '../config/config';

const BlogContextProvider = ({children}) => {
    const [data,setData] = useState([]);
    const[toggler,setToggler] = useState(true);

  //   useEffect(() => {
  //   const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
  //   setData(storedBlogs);
  // }, []);

  // Save blogs whenever data changes
    useEffect(() => {
    // localStorage.setItem("blogs", JSON.stringify(data));
   
      const fetchBlogs = async() =>{
          try {
            const res = await instance.get('/blogs');
            // console.log(res.data)
            setData(res.data)
          } catch (error) {
            console.log('Error:',error)
          }
      }
      fetchBlogs()
   
  }, [data,setData]);
  return (
    <BlogContext.Provider value={{toggler,setToggler,data,setData}}>
        {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider