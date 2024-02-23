import styled from 'styled-components';

export const SelectWrap = styled.div`
    position: relative;

    svg {
        fill: var(--white);

        @media screen and (min-width: 768px) {
            width: 20px;
            height: 20px;
        }

        @media screen and (min-width: 1440px) {
            width: 23px;
            height: 23px;
        }
    }

    img {
        @media screen and (min-width: 768px) {
            width: 25px;
            height: 25px;
        }

        @media screen and (min-width: 1440px) {
            width: 30px;
            height: 30px;
        }
    }
`

export const DefaultLangDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const DefaultLangBtn = styled.button`
`

export const LangBtn = styled.button`
`

export const DropDownDiv = styled.div`
    display: none;
    position: absolute;
    top: 130%;
`