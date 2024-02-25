import { ContainerWrap } from '../App/App.styled';
import {
  FooterSection,
  FooterPositioning,
  FooterTitle,
  FooterSocialsWrap,
  FooterPolicyText,
} from './Footer.styled';
import { Socials } from './Socials/Socials';

const Footer = () => {
  return (
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
  );
};

export default Footer;
