import React from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import { useState } from 'react'

const Menu = () => (
      <>
                <p className='one'><a href="#home">Home</a></p>
                <p className='two'><a href="#wgpt3">What is GPT?</a></p>
                <p className='three'><a href="#possibility">Open AI</a></p>
                <p className='four'><a href="#features">Case Studies</a></p>
                <p><a href="#blog">Library</a></p>      
  
      </>
)
      
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [navbar, setNavbar] = useState(false)
  
  const scrollMy = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', scrollMy)
  
  return (
    <div className={`gpt3__navbar ${navbar ? 'sticky' : ''}`}>
       <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />  
        </div>
       </div>
        <div className='gpt3__navbar-sign'>
          <p>Sign In</p>
          <button type='button'> Sign Up</button>
        </div>
        <div className='gpt3__navbar-menu'>
              {
                toggleMenu
                 ? <RiCloseLine  color='#fff' size={27} onClick={ () => setToggleMenu(false) }/>
                 : <RiMenu3Line  color='#fff' size={27} onClick={ () => setToggleMenu(true) }/>
              }
              { toggleMenu && (
                <div className='gpt3__navbar-menu_container scale-up-center'>
                  <div className='gpt3__navbar-menu_container-links'> 
                    <Menu /> 
                      <div className='gpt3__navbar-menu_container-links-sign'>
                        <p>Sign In</p>
                        <button type='button'> Sign Up</button>
                      </div>
                  </div>
                </div>
              ) }
        </div>
    </div>
  )
}

export default Navbar