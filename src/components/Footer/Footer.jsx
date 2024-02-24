import { ContainerWrap } from '../App/App.styled';
<<<<<<< Updated upstream
import sprite from 'assets/icons/sprite.svg';
import { FooterTitle } from './Footer.styled';
=======

import {
  FooterSection,
  FooterPositioning,
  FooterTitle,
  FooterSocialsWrap,
  FooterPolicyText,
} from './Footer.styled';
import { Socials } from './Socials/Socials';
>>>>>>> Stashed changes

const Footer = () => {
  return (
    <footer>
<<<<<<< Updated upstream
      <ContainerWrap>
        <FooterTitle>Účetnictví a poradenství</FooterTitle>
        <adress>
          Prague, Czech Republic <br />
        </adress>
        <svg width="30">
          <use href={`${sprite}#icon-instagram`}></use>
        </svg>
        <svg width="30">
          <use href={`${sprite}#icon-address`}></use>
        </svg>
        <svg width="30">
          <use href={`${sprite}#icon-facebook`}></use>
        </svg>
        <svg width="30">
          <use href={`${sprite}#icon-phone`}></use>
        </svg>
      </ContainerWrap>
=======
      <FooterSection>
        <ContainerWrap>
          <FooterPositioning>
            <FooterTitle>Účetnictví a poradenství</FooterTitle>
            <FooterSocialsWrap></FooterSocialsWrap>
            <Socials />
            <FooterPolicyText>
              © 2024 Matovir s.r.o. | Všechna práva vyhrazena
            </FooterPolicyText>
          </FooterPositioning>

          <address>
            Prague, Czech Republic <br />
          </address>
        </ContainerWrap>
      </FooterSection>
>>>>>>> Stashed changes
    </footer>
  );
};

export default Footer;
