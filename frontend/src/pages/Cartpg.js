import React from 'react'
import Navbartemp from '../components/Navbar/Navbartemp'
import Footer from "../components/Footer/Footer";
import Cart from '../components/Cart/Cart';
import '../App.css'

const Cartpg = () => {
  return (
<div className=' col-lg-12 col-md-12 col-sm-12'>
        <Navbartemp/>
        <Cart/>
        <Footer/>
    </div>
  )
}

export default Cartpg