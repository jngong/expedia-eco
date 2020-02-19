import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import Logo from '../../images/expedia-logo.png'


class LogoNav extends Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        
        return(
            <div className='navbar'>
                <div className='logo'>
                    <img 
                        src={Logo}
                        alt='Expedia'
                        width='140'
                        height='40'  />
                </div>        
                <div className='nav-icons'>
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-user"></i>
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        )
    }
}

export default LogoNav