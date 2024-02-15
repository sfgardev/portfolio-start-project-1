import React from "react";
import svetaImgJpeg from "../../../assets/images/sveta.jpeg";
import svetaImgWebp from "../../../assets/images/sveta.webp";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper justify="space-around" align="center" $wrap>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>
              I am <span>Svetlana Dyablo</span>
            </S.Name>
            <S.MainTitle>
              <p>A Web Developer.</p>
              <Typewriter
                options={{
                  strings: ["A Web Developer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainTitle>
          </div>

          <S.PhotoWrapper>
            <picture>
              <source srcSet={svetaImgWebp} type="image/webp" />
              <source srcSet={svetaImgJpeg} type="image/jpeg" />
              <S.Photo src={svetaImgJpeg} alt="A girl with flowers" />
            </picture>
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
