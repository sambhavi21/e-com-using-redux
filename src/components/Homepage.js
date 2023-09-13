import React from 'react'
import Topbar from './Topbar'
import NavBar from './NavBar'
import Caruosel from './Caruosel'
import FeaturedProducts from './FeaturedProducts'
import Footer from './Footer'
 
 

export default function Homepage() {
  return (
    <>
     <Topbar/> 
     <NavBar/>
      <Caruosel/>
     <FeaturedProducts/>
     <Footer/>
    
     </>
  )
}
