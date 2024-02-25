import { SocialList, FooterIcon } from './Socials.styled';
import sprite from 'assets/icons/sprite.svg';

export const Socials = () => {
  return (
    <>
      <SocialList>
        <FooterIcon width="28" height="28">
          <use href={`${sprite}#icon-facebook`}></use>
        </FooterIcon>
        <FooterIcon width="28" height="28">
          <use href={`${sprite}#icon-address`}></use>
        </FooterIcon>
        <FooterIcon width="28" height="28">
          <use href={`${sprite}#icon-instagram`}></use>
        </FooterIcon>
        <FooterIcon width="28" height="28">
          <use href={`${sprite}#icon-phone`}></use>
        </FooterIcon>
      </SocialList>
    </>
  );
};
