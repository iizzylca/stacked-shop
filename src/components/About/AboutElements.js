import styled from 'styled-components';
import HeadPic from '../../images/menu-head-wall.jpg'
import InfoPic from '../../images/stacked-background.jpg'


export const AboutContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${HeadPic});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    height: 85vh;
    max-height: 100%;
    border-top: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: white;
    padding: 0 1rem;

    @media only screen and (min-width: 280px) and (orientation: portrait){
        background-attachment: scroll;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
        url(${HeadPic});        
        background-size: cover;
        background-position: center;
        width: 100vw;
        height: 100vh
    }
    
    
`;

export const HeadH1 = styled.h1`
    font-size: clamp(4rem, 10vw, 5rem);
    font-family: 'Sedgwick Ave Display';
    text-transform: uppercase;
`;


export const MoreContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${InfoPic});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    height: auto;
    max-height: 100%;

    border-top: 1px solid white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: white;
    font-family: 'Montserrat';
    padding: 0 2.5rem;
    
    @media only screen and (min-width: 280px) and (orientation: portrait){
        background-attachment: scroll;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
        url(${InfoPic});        
        background-size: cover;
        background-position: center;
        width: 100vw;
        height: 100vh
    }
    


`;

export const InfoH1 = styled.h1`
    font-size: clamp(2.5rem, 4vw, 3rem);
    margin-top: 2.5rem;
    margin-bottom: 2rem;
    
`;

export const InfoP = styled.p`
    margin-bottom: 1rem;
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 2rem);
`;


export const AboutButton = styled.button`
    font-size: clamp(1rem, 3vw, 1.5rem);
    margin-bottom: 2rem;

    padding: 0.5rem 1.5rem;
    border: none;
    background: #ffc500;
    color: #000;
    transition: 0.2s ease-out;

    &:hover {
        color: #fff;
        background: #e31837;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;