import React from 'react'
import Typed from 'react-typed';
import '../App.css'

const Header = () => {
  return (
    <>
    <div className="header-wraper">
        <div className='main-info'>
            <h1>
                web development and digital marketing
            </h1>
            <Typed 
            className="typed-text"
            strings={["Web-Design","Web Development","SEO-Marketing","UI/UX Design"]}
            typeSpeed={40}
            backSpeed={60}
            loop 
            />
            <a href='#' className='btn_main'>Contact me</a>
        </div>
    </div>
            </>
  )
}

export default Header