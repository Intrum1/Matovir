import { styled } from "styled-components";

export const MainTitle = styled.h2`
    position: relative;
    font-size: 20px;
    font-weight: 500;
    color: var(--accentOrange);

    @media screen and (min-width: 768px) {
        font-size: 25px;
    }

    @media screen and (min-width: 1440px) {
        font-size: 30px;
    }
    &::before {
        position: absolute;
        top: 50%;
        left: -60px;
        content: '';
        display: block;
        width: 50px;
        height: 3px;
        border-radius: 5px;
        background-color: var(--accentOrange);
    }

    &::after {
        position: absolute;
        top: 50%;
        right: -60px;
        content: '';
        display: block;
        width: 50px;
        height: 3px;
        border-radius: 5px;
        background-color: var(--accentOrange);
    }
`