import React from 'react'
import {Nav, NavLink, LogoImg, NavIcon, Bars} from './NavbarElements'
import Logo from '../../images/stacked-t-logo.png'

const NavBar = () => {
    return (
        <Nav>
            <NavLink>
                <LogoImg src={Logo} alt='stacked-shop-logo'/>
            </NavLink>
            <NavIcon>
                <Bars/>
            </NavIcon>
        </Nav>
        
    )
}

export default NavBar
