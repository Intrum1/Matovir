import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Navig = styled.nav``

export const NavigList = styled.ul`
    display: flex;
    gap: 30px;
    align-items: center;
`

export const NavigLink = styled(NavLink)`
    color: white;

    &.active {
        color: #f8b147;
    }
`