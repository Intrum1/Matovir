import { ContainerWrap } from '../App/App.styled';
import sprite from 'assets/icons/sprite.svg';
import {
  FooterSection,
  FooterPositioning,
  FooterTitle,
  FooterPolicyText,
} from './Footer.styled';

const Footer = () => {
  return (
      <FooterSection>
        <ContainerWrap>
          <FooterPositioning>
            <FooterTitle>Účetnictví a poradenství</FooterTitle>
            <svg width="30">
              <use href={`${sprite}#icon-address`}></use>
            </svg>
            <address>
              Prague, Czech Republic <br />
            </address>
            <svg width="30">
              <use href={`${sprite}#icon-instagram`}></use>
            </svg>

            <svg width="30">
              <use href={`${sprite}#icon-facebook`}></use>
            </svg>
            <svg width="30">
              <use href={`${sprite}#icon-phone`}></use>
            </svg>
            <FooterPolicyText>
              © 2024 Matovir s.r.o. | Všechna práva vyhrazena
            </FooterPolicyText>
          </FooterPositioning>
        </ContainerWrap>
      </FooterSection>
  );
};

export default Footer;