import React from 'react'
import './NavbarLogin.css'
import Logo from "../assets/sksLogo.jpeg";
import stuEventLogo from "../assets/stuEventLogo.jpg";

function NavbarLogin() {
  return (
   <div>

    <div className='NavbarHomePageAll'>
    <img style={{width:'80px',height:'80px'}} src={Logo} alt="" />
    <img style={{width:'250px',height:'80px'}}  src={stuEventLogo} alt="" />
   <div className='LinksHomePageNavbar'>
    <a href="Events">Event</a>
    <a href="Clubs">Clubs</a>
    </div>
    </div>

   </div>
  )
}

export default NavbarLogin