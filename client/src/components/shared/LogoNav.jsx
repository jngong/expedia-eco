import React from 'react'
import Logo from '../../images/expedia-logo.png'
import '../../css/LogoNav.css'
import { Link } from 'react-router-dom'

const LogoNav = () => {

    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to="/">
                <img
                    src={Logo}
                    alt='Expedia'
                    width='140'
                    height='40' />
                </Link>
            </div>
            <div className='nav-icons'>
                <i className="fas fa-heart"></i>
                <i className="fas fa-user"></i>
                <Link to='/admin'>
                    <i className="fas fa-bars"></i>
                </Link>
            </div>
        </div>
    )
}

export default LogoNav