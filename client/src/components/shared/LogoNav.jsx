import React, { Component } from 'react'
import Logo from '../../images/expedia-logo.png'
import '../../css/LogoNav.css'


const LogoNav = () => {

    return (
        <div className='navbar'>
            <div className='logo'>
                <img
                    src={Logo}
                    alt='Expedia'
                    width='140'
                    height='40' />
            </div>
            <div className='nav-icons'>
                <i className="fas fa-heart"></i>
                <i className="fas fa-user"></i>
                <i className="fas fa-bars"></i>
            </div>
        </div>
    )
}

export default LogoNav