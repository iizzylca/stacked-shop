import styled from 'styled-components';
    
// border: 1px solid black;
export const MainContainer = styled.div`

    height: 100%;
    width: 100%
`;


// border: 1px solid green;
export const MainContent = styled.div`

    height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);


`;


// border: 1px solid red;
export const MainItems = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: auto;
    padding: 0 2rem;
    color: white;
    font-family: 'Sedgwick Ave Display';
    text-transform: uppercase;


    @media only screen and (min-width: 812px) and (orientation: landscape) {
        height: inherit;
    }

    @media only screen and (min-width: 568px) and (orientation: landscape){
        height: inherit;
    }


    @media only screen and (min-width: 1024px) and (orientation: portrait) {
        height: 80vh;

    }

    @media only screen and (min-width: 1366px) and (orientation: landscape) {
        height: 100vh;
    }

`;

// border: 1px solid blue;
export const MainH1 = styled.h1`

    display: flex;
    flex-direction: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 2px;
    font-size: clamp(4rem, 10vw, 5rem);
    margin-bottom: 2rem;

    
`;

export const MainHr = styled.hr`
    width: 65%;

`
// border: 1px solid blue;
export const MainP = styled.p`
    display: flex;
    flex-direction: center;
    justify-content: center;
    text-align: center;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    margin-bottom: 2rem;

    
`;

// border: 1px solid blue;
// export const SubP = styled.p`

//     font-size: clamp(1.75rem, 2.5vw, 3rem);
//     margin-bottom: 2rem;
    
    
// `;

export const MainBtn = styled.a`
    font-size: clamp(1.4rem, 2.5vw, 1.80rem);
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 5px;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;
    margin-bottom: 2rem;

    &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`;

// border: 1px solid blue;
export const SocialIcons = styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 240px;
    margin-bottom: 4rem;


`;


// border: 1px solid blue;
export const SocialIconLink = styled.a`

    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 32px;

    
`;