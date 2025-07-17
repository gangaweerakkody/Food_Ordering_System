import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
      <img src={assets.zuru} alt="" className="logo"/>
      {/* <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")}className={menu=="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("menu")}className={menu=="menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("mobile-app")}className={menu=="mobile-app"?"active":""}>Mobile App</li>
        <li onClick={()=>setMenu("contact-us")}className={menu=="contact-us"?"active":""}>Contact Us</li>
      </ul> */}
      <div className="navbar-menu">
      <Link to='/' onClick={()=>setMenu("home")} className={menu=="home"?"active":""} >Home</Link>
       <Link to='/menu'onClick={()=>setMenu("menu")} className={menu=="menu"?"active":""}>Menu</Link>
        <Link to='/mobileapp' onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app"?"active":""}>Mobile App</Link>
         <Link to='/contact' onClick={()=>setMenu("contact-us")} className={menu=="contact-us"?"active":""} >Contact Us</Link>
   </div>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt=""/>
            <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
