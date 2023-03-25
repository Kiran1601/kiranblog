import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/My Image.jpeg'
import HeaderSocials from './HeaderSocials'

function header() {
  return (
    <header>
       <div className="container header__cotainer">
         <h5> Hello I'm</h5>
         <h1> Kiran Annamreddy</h1>
         <h5 className='text-light'> Java FullStack Developer</h5>
          <CTA />
          <HeaderSocials/>

          <div >
            <img src={ME} alt="me" class = "myImage" />
          </div>

          <a href= "#contact" className= 'scroll__down'>Scroll Down</a>
       </div>
    </header>
    
  )
}

export default header