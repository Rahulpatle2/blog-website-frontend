import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import BlogContextProvider from './context/BlogContextProvider'

const Layout = () => {
  return (
    < >
      
       <BlogContextProvider>
         <Nav/>
        <Outlet/>
        <Footer/>
       </BlogContextProvider>
       
    </>
  )
}

export default Layout