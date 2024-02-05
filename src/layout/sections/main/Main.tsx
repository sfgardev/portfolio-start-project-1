import styled from "styled-components";
import svetaImgJpeg from "../../../assets/images/sveta.jpeg";
import svetaImgWebp from "../../../assets/images/sveta.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-between" align="center" $wrap>
          <div>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Svetlana Dyablo</span>
            </Name>
            <MainTitle>A Web Developer.</MainTitle>
          </div>

          <PhotoWrapper>
            <picture>
              <source srcSet={svetaImgWebp} type="image/webp" />
              <source srcSet={svetaImgJpeg} type="image/jpeg" />
              <Photo src={svetaImgJpeg} alt="A girl with flowers" />
            </picture>
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #fff5e7;
  display: flex;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 22.5rem;
    height: 29.38rem;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`;

const Photo = styled.img`
  width: 21.875rem;
  height: 26.875rem;
  object-fit: cover;
`;

const MainTitle = styled.h1`
  font-size: 1.6875rem;
  font-weight: 400;
`;

const Name = styled.h2`
  font-size: 3.125rem;
  font-family: "Josefin Sans", sans-serif;
  letter-spacing: 5%;
  margin: 0.625rem 0;

  span {
    position: relative;
    z-index: 0;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 1.25rem;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const SmallText = styled.h2`
  font-size: 0.875rem;
  font-weight: 400;
`;
