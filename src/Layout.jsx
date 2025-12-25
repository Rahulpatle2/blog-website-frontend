import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import BlogContextProvider from './context/BlogContextProvider'
import AuthContextProvider from './context/AuthContextProvider'

const Layout = () => {
  return (
    < >

      <BlogContextProvider>
        <AuthContextProvider>
          <Nav />
          <Outlet />
          <Footer />
        </AuthContextProvider>

      </BlogContextProvider>

    </>
  )
}

export default Layout