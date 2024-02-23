import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBlock = styled.header`
    display: flex;
    align-items: center;
    position: sticky;
    width: 100vw;
    background-color: var(--headerBg);
`;

export const HeaderContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 15px 0;
`;

export const HeaderLogo = styled(Link)`   
   img {
      filter: drop-shadow(1px 3px 10px var(--black));
    @media screen and (min-width: 768px) {
      width: 170px;
      height: 80px;
    }

    @media screen and (min-width: 1440px) {
    width: 200px;
    height: 90px;
    }
   }
`;

