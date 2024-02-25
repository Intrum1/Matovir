import {
  SocialList,
  FaceIcon,
  AdressIcon,
  InstaIcon,
  PhoneIcon,
} from './Socials.styled';
import sprite from 'assets/icons/sprite.svg';

export const Socials = () => {
  return (
    <>
      <SocialList>
        <FaceIcon width="28" height="28">
          <use href={`${sprite}#icon-facebook`}></use>
        </FaceIcon>
        <AdressIcon>
          <svg width="28" height="28">
            <use href={`${sprite}#icon-address`}></use>
          </svg>
        </AdressIcon>
        <InstaIcon>
          <svg width="28" height="28">
            <use href={`${sprite}#icon-instagram`}></use>
          </svg>
        </InstaIcon>
        <PhoneIcon>
          <svg width="28" height="28">
            <use href={`${sprite}#icon-phone`}></use>
          </svg>
        </PhoneIcon>
      </SocialList>
    </>
  );
};
