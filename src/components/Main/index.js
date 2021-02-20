import React from 'react'
import {MainContainer, MainContent, MainItems, MainH1, MainHr, MainP, SubP} from './MainElements'



const Main = () => {
    
    return (
        <>
            <MainContainer>
                <MainContent>
                    <MainItems>
                        <MainH1 className='main-h1'>STACKED SANDWICH SHOP</MainH1>
                        <MainHr/>
                        <MainP> 9 Days</MainP>
                        <SubP>Opening Our Doors March 1st</SubP>
                    </MainItems>
                </MainContent>
            </MainContainer>
        </>
    )
} 

export default React.memo(Main)
