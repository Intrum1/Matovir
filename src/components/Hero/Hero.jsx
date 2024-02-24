import { ContainerWrap } from "components/App/App.styled"
import { HeroSection, HeroBgDiv, TitleH1 } from "./Hero.styled"

const Hero = () => {
    return (
        <HeroSection>
            <HeroBgDiv>
                <ContainerWrap>
                    <TitleH1>Matovir</TitleH1>
                </ContainerWrap>
            </HeroBgDiv>
        </HeroSection>
    )
}

export default Hero