import { createPortal } from 'react-dom';
import SelectLang from "components/Header/SelectLang";
import Navigation from "components/Navigation";
import { MenuBackdrop, Menu } from "./MobMenu.styled";

const menuRoot = document.getElementById('menu-root');

const MobMenu = ({isMenuOpen, closeMobMenu}) => {
    const onBackdropClose = ({target, currentTarget}) => {
        if(target === currentTarget) closeMobMenu()
    }

    return createPortal(
    <MenuBackdrop onClick={onBackdropClose}>
        <Menu $isMenuOpen={isMenuOpen}>
            <Navigation variant='menu'/>
            <SelectLang variant='menu'/>
        </Menu>
  </MenuBackdrop> ,
  menuRoot
    );
}

export default MobMenu;