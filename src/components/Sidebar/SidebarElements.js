import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 225px;
    height: 100%;
    background-color: #111;
    opacity: 0.9;
    display:grid;
    align-items:center;
    top: 0;
    transition: 0.7s;
    right: ${({isOpen}) => (isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: white;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent; 
    border: transparent; 
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarMenu = styled.div `
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px );
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(3, 60px);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Sedgwick Ave Display';
    color: white;
    cursor: pointer;

    &:hover{
        color: #b2ffff;
        transition: 0.2s ease-in-out;

    };
`;
