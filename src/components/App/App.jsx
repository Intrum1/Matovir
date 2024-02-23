import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme'
import  GlobalStyles  from 'assets/styles/GlobalStyles';
import SharedLayout from 'components/SharedLayout';
import { MainContainer } from './App.styled';

const AboutPage = lazy(()=> import('pages/AboutUs'));
const ContactsPage = lazy(()=> import('pages/Contacts'));
const NotFoundPage = lazy(()=> import('pages/NotFound'));

const  App = () => {
  return (
    <ThemeProvider theme={theme}>
    <MainContainer>
    <GlobalStyles/>

    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<AboutPage/>}/>
        <Route path='/contacts' element={<ContactsPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    </Routes>
    </MainContainer>
    </ThemeProvider>
  );
}

export default App;