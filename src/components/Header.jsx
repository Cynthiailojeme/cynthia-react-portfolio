import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <a href="#home">CynthiaI.</a>
      </div>

      <div className='header-right'>
        <a href="#about" className='header-right-link-1'>About Me</a>
        <a href="#services" className='header-right-link-1'>Services</a>
        <a href="#portfolio" className='header-right-link-2'>Portfolio</a>
        <a href="#contact" className='header-right-link-2'>Contact</a>
      </div>
    </div>
  )
}

export default Header