import { ContainerWrap } from '../App/App.styled';
import sprite from 'assets/icons/sprite.svg';
import { FooterTitle } from './Footer.styled';

const Footer = () => {
  return (
    <footer>
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
    </footer>
  );
};

export default Footer;
