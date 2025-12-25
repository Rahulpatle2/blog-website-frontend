import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Nav from './components/Nav/Nav.jsx'
import BlogContextProvider from './context/BlogContextProvider.jsx'
import AuthContextProvider from './context/AuthContextProvider.jsx'

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