import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
`

export const ContainerWrap = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    max-width: 365px;
  }

  @media screen and (min-width: 768px) {
    max-width: 734px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1406px;
  }
`;