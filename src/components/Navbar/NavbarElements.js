import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';


// border: 1px solid black;
export const Nav = styled.nav`

    background: transparent;
    height: 40vh;
    position: relative;
    display: flex;
    justify-content: center;
    font-weight: 700;

    @media only screen and (min-width: 812px) and (orientation: landscape) {
        display: grid;
        height: inherit;
    }

    @media only screen and (min-width: 568px) and (orientation: landscape){
        display: grid;
        height: inherit;
    }

    @media only screen and (min-width: 1024px) and (orientation: portrait) {
        display: grid;
        height: inherit;
    }
    
`;

// border: 1px solid pink;
export const NavLink = styled(Link)`

    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

`;


// border: 1px solid black;
export const LogoImg = styled.img`

    color: white;
    width: 275px;
    height: auto;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        max-width: 225px;
        height: auto;
    }

`;


// border: 1px solid red;
export const NavIcon = styled.div`

    display: flex;
    position: absolute;
    top: 10%;
    right: 2%;
    cursor: pointer;
    color: white;

`;


// border: 1px solid orange;
export const Bars = styled(FaBars)`

    width: 40px;
    height: 40px;

`;