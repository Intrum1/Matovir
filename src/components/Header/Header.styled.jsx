import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBlock = styled.header`
    display: flex;
    align-items: center;
    position: sticky;
    width: 100vw;
    background-color: #918383;
`;

export const HeaderContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 15px 0;
`;

export const HeaderLogo = styled(Link)`   
   img {
    width: 170px;
    height: 100px;
   }
`;

