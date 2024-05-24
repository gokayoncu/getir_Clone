import React from 'react'
import './../css/navbar.css'
import { TbWorld } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { useCallback } from 'react';

function Navbar() {
  const firstbtn = useCallback((buttonElement) => {
    if (buttonElement) {
      buttonElement.focus();
    }
  }, []);

  return (
    <div className='navbar'>
      <div className='leftbar'>
        <NavLink to='/' ref={firstbtn} className='logo getirlogo' ><button style={{display:'none'}}></button></NavLink>
        <NavLink to='/yemek' className='logo getireat'></NavLink>
        <NavLink to='/buyuk' className='logo getirbig'></NavLink>
        <NavLink to='/getirsu' className='logo getirwater'></NavLink>
        <NavLink to='/getirçarşı' className='logo getir'></NavLink>
      </div>
      <div className='rightbar'>
            <a href=""><TbWorld className='icons'/> Türkçe(TR)</a>
            <a href=""><FaUser className='icons'/> Giriş Yap</a>
            <a href=""><HiUserAdd className='icon' />Kayıt Ol</a>
      </div>
    </div>
  )
}

export default Navbar
