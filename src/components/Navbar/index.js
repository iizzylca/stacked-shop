import React from 'react'
import {Nav, NavLink, LogoImg, NavIcon, Bars} from './NavbarElements'
import Logo from '../../images/stacked-i-logo.png'

const NavBar = ({toggle}) => {
    return (
        <Nav>
            <NavLink to='/'>
                <LogoImg src={Logo} alt='stacked-shop-logo'/>
            </NavLink>
            <NavIcon onClick={toggle}>
                <Bars/>
            </NavIcon>
        </Nav>
        
    )
}

export default React.memo(NavBar)
