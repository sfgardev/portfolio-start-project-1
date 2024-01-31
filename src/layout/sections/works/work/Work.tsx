import styled from "styled-components";

type WorkProps = {
  title: string;
  text: string;
  webpSrc: string;
  pngSrc: string;
  alt: string;
};

export const Work = (props: WorkProps) => {
  return (
    <StyledWork>
      <picture>
        <source srcSet={props.webpSrc} type="image/webp" />
        <source srcSet={props.pngSrc} type="image/png" />
        <WorkImage src={props.pngSrc} alt={props.alt} />
      </picture>
      <WorkTitle>{props.title}</WorkTitle>
      <WorkText>{props.text}</WorkText>
      <WorkLink>Demo</WorkLink>
      <WorkLink>Code</WorkLink>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: #d5dd3d;
  width: 40%;
`;

const WorkImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const WorkTitle = styled.h3``;

const WorkText = styled.p``;

const WorkLink = styled.a``;
