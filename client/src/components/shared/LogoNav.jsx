import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

class LogoNav extends Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        
        return(
            <Navbar bg='warning' variant='dark' >
                <Navbar.Brand>
                    <img 
                    src={require('/Users/harley/Desktop/Sei-Blizzard/Unit3/p3/flying-four/client/src/images/expedia-logo.png')}
                    alt='Expedia'
                    width='100'
                    height='30'  />
                </Navbar.Brand>
                <div className='nav-icons'>
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-user"></i>
                    <i class="fas fa-bars"></i>
                </div>
            </Navbar>
        )
    }
}

export default LogoNav