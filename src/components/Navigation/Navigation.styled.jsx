import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Navig = styled.nav`
    @media screen and (min-width: 768px) {
    }
`

export const NavigList = styled.ul`
    display: flex;
    gap: 30px;
    align-items: center;
`

export const NavigLink = styled(NavLink)`
    color: var(--white);
    transition: color var(--linearTransition);

    &.active {
        position: relative;
        color: var(--accentOrange);

        &::after {
            position: absolute;
            bottom: -5px;
            content: '';
            display: block;
            width: 100%;
            height: 4px;
            border-radius: 30px;
            background-color: var(--accentOrange);
        }
    }

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1440px) {
        &:hover:not(&.active) {
            color: var(--accentOrange);
        }
        font-size: 25px;
    }
`