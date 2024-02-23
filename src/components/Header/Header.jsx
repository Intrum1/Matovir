import Navigation from 'components/Navigation';
import logo from 'assets/images/logo.png';
import {  ContainerWrap } from '../App/App.styled';
import { HeaderBlock, HeaderContent, HeaderLogo } from './Header.styled';


const Header = () => {
  return (
    <HeaderBlock>
        <ContainerWrap>
            <HeaderContent>
                <HeaderLogo to='/'>
                    <img src={logo} alt='logo of the company'/>
                </HeaderLogo>
                <Navigation/>
            </HeaderContent>
        </ContainerWrap>
    </HeaderBlock>
    );
}

export default Header;