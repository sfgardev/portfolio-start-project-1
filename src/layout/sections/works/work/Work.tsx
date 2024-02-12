import React from "react";
import { Button } from "../../../../components/Button";
import { Link } from "../../../../components/Link";
import { S } from "../Works_Styles";

type WorkProps = {
  title: string;
  text: string;
  webpSrc: string;
  pngSrc: string;
  alt: string;
};

export const Work: React.FC<WorkProps> = (props) => {
  return (
    <S.Work>
      <S.ImageWrapper>
        <picture>
          <source srcSet={props.webpSrc} type="image/webp" />
          <source srcSet={props.pngSrc} type="image/png" />
          <S.WorkImage src={props.pngSrc} alt={props.alt} />
          <Button>View Project</Button>
        </picture>
      </S.ImageWrapper>
      <S.WorkDescription>
        <S.WorkTitle>{props.title}</S.WorkTitle>
        <S.WorkText>{props.text}</S.WorkText>
        <Link href="#">Demo</Link>
        <Link href="#">Code</Link>
      </S.WorkDescription>
    </S.Work>
  );
};
