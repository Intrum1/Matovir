import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from 'components/Navigation';
import SelectLang from './SelectLang';
import logo from 'assets/images/logo.png';
import sprite from 'assets/icons/sprite.svg'
import {  ContainerWrap } from '../App/App.styled';
import { HeaderBlock, HeaderContent, HeaderLogo, BurgerBtn } from './Header.styled';
import MobMenu from 'components/MobMenu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const {t} = useTranslation();

    const toggleMobMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }

    const closeMobMenu = () => {
        setIsMenuOpen(false);
    }

  return (
    <HeaderBlock>
        <ContainerWrap>
            <HeaderContent>
                <HeaderLogo to='/'>
                    <img src={logo} alt={t('alt.logo')} width={150} height={70}/>
                </HeaderLogo>
                
                <BurgerBtn type="button" onClick={toggleMobMenu}>
                    <svg width={40} height={40}>
                    <use href={`${sprite}#icon-burger`}></use>
                    </svg>
                </BurgerBtn>

                <Navigation variant='header'/>
                <SelectLang variant='header'/>

            </HeaderContent>
        </ContainerWrap>
        {isMenuOpen && <MobMenu closeMobMenu={closeMobMenu} isMenuOpen={isMenuOpen} />}
    </HeaderBlock>
    );
}

export default Header;