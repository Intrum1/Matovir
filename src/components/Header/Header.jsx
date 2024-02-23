import Navigation from 'components/Navigation';
import SelectLang from './SelectLang';
import logo from 'assets/images/logo.png';
import {  ContainerWrap } from '../App/App.styled';
import { HeaderBlock, HeaderContent, HeaderLogo } from './Header.styled';


const Header = () => {
  return (
    <HeaderBlock>
        <ContainerWrap>
            <HeaderContent>
                <HeaderLogo to='/'>
                    <img src={logo} alt='logo of the company' width={150} height={70}/>
                </HeaderLogo>
                <Navigation/>
                <SelectLang/>
            </HeaderContent>
        </ContainerWrap>
    </HeaderBlock>
    );
}

export default Header;