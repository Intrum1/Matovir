import { keyframes, styled } from "styled-components";

const smoothMenuOpening = keyframes`
    0% {
        height: 5vh;
        opacity: 0;
    }

    50% {
        opacity: 0.2;
    }

    100% {
        height: 25vh;
        opacity: 1;
    }
`

export const MenuBackdrop = styled.div`
    position: fixed;
    top: 70px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2; 
`

export const Menu = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 25vh;
    border-top: 1px solid var(--white);
    padding: 30px;
    background-color: var(--headerBg);
    z-index: 3; 
    animation: ${smoothMenuOpening} 1s ease;
    transition: all var(--linearTransition);
`