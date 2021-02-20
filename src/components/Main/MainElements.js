import styled from 'styled-components';


export const MainContainer = styled.div`
    height: 100vh;
    background-position: center;
    background-size: cover;

    
`;

export const MainContent = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`;

export const MainItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;
    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;

export const MainH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    
`;

export const MainHr = styled.hr`
    margin: auto;
    width: 40%;
`

export const MainP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
`;


export const SubP = styled.button`
    font-size: 1.4rem;
    margin-bottom: 2rem;
    
`;