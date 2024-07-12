import React from 'react'
import Logo from '../assets/LOGO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import laguageLogo from '../assets/language.png'
import profileLogo from '../assets/profilelogo.png'
import '../styling/styles.css'

function NavBar() {
  return (
    <div style={{backgroundColor:"rgba(252, 248, 244, 1)"}} className='h-[72px] w-full flex justify-between px-[60px] items-center font-bold  fixed
     text-black'>
<img src={Logo} ></img>


{/* Navbar options............ */}


<div className='navOptions flex gap-[32px]'>
    <h1>PROPERTIES</h1>
    <h1>MY DASHBOARD/ACITVITY</h1>
    <h1>LIST YOUR PROPERTY</h1>
    <h1>CONTACT US</h1>
    <h1>MORE</h1>
    <h1>|</h1>
   <img src={laguageLogo}/>
   <img src={profileLogo}/>
</div>



    </div>
  )
}

export default NavBar