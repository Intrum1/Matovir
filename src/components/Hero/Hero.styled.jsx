import { styled } from "styled-components";
import heroBgImg from 'assets/images/hero/hero-bg.jpg'

export const HeroSection = styled.section`

    padding-bottom: 30px;
`;

export const HeroBgDiv = styled.div`
    max-width: 100vw;
    height: 500px;
    background: url(${heroBgImg}) no-repeat center/cover;
    backdrop-filter: blur(10px);
`;

export const TitleH1 = styled.h1``