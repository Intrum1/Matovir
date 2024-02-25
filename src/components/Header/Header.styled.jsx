import {styled} from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBlock = styled.header`
    display: flex;
    align-items: center;
    position: sticky;
    width: 100vw;
    background-color: var(--headerBg);

    @media screen and (min-width: 768px) {
      height: 110px;
    }

    @media screen and (min-width: 1440px) {
      height: 130px;
    }
`;

export const HeaderContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 15px 0;
`;

export const HeaderLogo = styled(Link)`   
   position: relative;

   @media screen and (min-width: 1440px) {
      &:hover img,
      &:focus img {
         filter: drop-shadow(1px 3px 10px var(--accentOrange));
      }
    }

   img {
      filter: drop-shadow(1px 3px 10px var(--black));

    @media screen and (min-width: 768px) {
      width: 190px;
      height: 60px;
    }

    @media screen and (min-width: 1440px) {
      width: 250px;
      height: 70px;
      transition: filter var(--linearTransition);
    }
   }
`;

export const BurgerBtn = styled.button`
   display: block;

   @media screen and (min-width: 768px) {
      display: none;
   }

   svg {
      fill: var(--white);
   }
`