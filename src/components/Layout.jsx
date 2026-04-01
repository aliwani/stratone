import React from 'react'
import Navbar from './navbar/Navbar'
import ContactUs from './ContactUs'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <ContactUs/>
      <Footer/>
    
    </>
  )
}

export default Layout
