import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink} from "./SidebarElements";

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
                
        </SidebarContainer>
    )
}

export default React.memo(Sidebar)
