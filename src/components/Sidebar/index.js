import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from "./SidebarElements";

function Sidebar({isOpen, toggle}){
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Home</SidebarLink>
                <SidebarLink to='/menu'>Menu</SidebarLink>
                <SidebarLink to='/about'>About</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute
                href='https://www.toasttab.com/Stacked-Sandwich-Shop'
                target='_blank'
                aria-label='Redirect to Toast'
                rel='noopener noreferrer'
                >
                    Order Now
                </SidebarRoute>
            </SideBtnWrap>
                
        </SidebarContainer>
    )
}

export default React.memo(Sidebar)
