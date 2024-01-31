import styled from "styled-components";
import svetaImgJpeg from "../../../assets/images/sveta.jpeg";
import svetaImgWebp from "../../../assets/images/sveta.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify="space-around" align="center" $wrap>
        <div>
          <span>Hi There</span>
          <span>I am Svetlana Dyablo</span>
          <MainTitle>A Web Developer.</MainTitle>
        </div>

        <picture>
          <source srcSet={svetaImgWebp} type="image/webp" />
          <source srcSet={svetaImgJpeg} type="image/jpeg" />
          <Photo src={svetaImgJpeg} alt="A girl with flowers" />
        </picture>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #dabcbc;
`;

const Photo = styled.img`
  width: 21.875rem;
  height: 26.875rem;
  object-fit: cover;
`;

const MainTitle = styled.h1``;
