import { useTranslation } from 'react-i18next';
import {Navig, NavigList, NavigLink } from "./Navigation.styled";

const Navigation = ({variant}) => {
    const {t} = useTranslation();

    return (
       <Navig $variant={variant}>
           <NavigList>
               <li>
                    <NavigLink to='/'>{t('nav.aboutUs')}</NavigLink>
               </li>
               <li>
                    <NavigLink to='/contacts'>{t('nav.contacts')}</NavigLink>
               </li>
           </NavigList>
       </Navig>
    )
   }
   
   export default Navigation;