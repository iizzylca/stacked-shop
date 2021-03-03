import React from 'react'
import {MainContainer, MainContent, MainItems, MainH1, MainHr, MainP, MainBtn, SocialIcons, SocialIconLink} from './MainElements'
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import {useState} from 'react'
import NavBar from '../Navbar';
import Sidebar from '../Sidebar';


const Main = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <div className='background-img'>
                <NavBar toggle={toggle}/>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <MainContainer>
                    <MainContent>
                        <MainItems>
                            <MainH1 className='main-h1'>STACKED SANDWICH SHOP</MainH1>
                            <MainHr/>
                            <MainP>Deliveries Available Sunday March 7th</MainP>
                            <MainBtn 
                                href='https://www.toasttab.com/Stacked-Sandwich-Shop'
                                target='_blank'
                                aria-label='Redirect to Toast'
                                rel='noopener noreferrer'>
                                    Order Now
                            </MainBtn>
                            <SocialIcons>
                                <SocialIconLink 
                                    href='https://www.facebook.com/Stacked-105998624816226'
                                    target='_blank'
                                    aria-label='Redirect to Facebook'
                                    rel='noopener noreferrer'>
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink 
                                    href='https://www.instagram.com/stacked_sandwich_shop'
                                    target='_blank'
                                    aria-label='Redirect to Instagram'
                                    rel='noopener noreferrer'>
                                    <FaInstagram />
                                </SocialIconLink> 
                            </SocialIcons>
                        </MainItems>
                    </MainContent>
                </MainContainer>

            </div>
        </>
    )
} 

export default React.memo(Main)
