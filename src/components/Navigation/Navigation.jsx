import {Navig, NavigList, NavigLink } from "./Navigation.styled";

const Navigation = () => {
    return (
       <Navig>
           <NavigList>
               <li>
                    <NavigLink to='/'>About Us</NavigLink>
               </li>
               <li>
                    <NavigLink to='/contacts'>Contacts</NavigLink>
               </li>
           </NavigList>
       </Navig>
    )
   }
   
   export default Navigation;