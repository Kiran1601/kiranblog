import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {BiBook} from 'react-icons/bi'
import {BsFillAwardFill} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (    
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}
       className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>

      <a href="#about" onClick={() => setActiveNav('#about')}
       className={activeNav === '#about' ? 'active' : ''}><FcAbout/></a>

      <a href="#experience" onClick={() => setActiveNav('#experience')}
       className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>

      <a href="#Education" onClick={() => setActiveNav('#Education')}
       className={activeNav === '#Education' ? 'active' : ''}><BsFillAwardFill /></a> 

      <a href="#contact" onClick={() => setActiveNav('#contact')}
       className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage/></a>
    </nav> 
  )
}

export default Nav