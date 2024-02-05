import styled from "styled-components";
import { Link } from "../../../../components/Link";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";

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
      <ImageWrapper>
        <picture>
          <source srcSet={props.webpSrc} type="image/webp" />
          <source srcSet={props.pngSrc} type="image/png" />
          <WorkImage src={props.pngSrc} alt={props.alt} />
          <Button>View Project</Button>
        </picture>
      </ImageWrapper>
      <WorkDescription>
        <WorkTitle>{props.title}</WorkTitle>
        <WorkText>{props.text}</WorkText>
        <Link href="#">Demo</Link>
        <Link href="#">Code</Link>
      </WorkDescription>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  max-width: 33.75rem;
  width: 100%;

  ${Link} {
    padding: 0.625rem 0;

    & + ${Link} {
      margin-left: 1.25rem;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    transition: all 0.25s;
  }

  &:hover {
    &::before {
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(0.5rem);
    }

    ${Button} {
      opacity: 1;
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    transition: all 0.25s;

    &::before {
      width: 100%;
      height: 100%;
    }
  }
`;

const WorkImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  /* display: block; */
`;

const WorkDescription = styled.div`
  padding: 1.5625rem 1.25rem;
`;

const WorkTitle = styled.h3``;

const WorkText = styled.p`
  margin: 0.875rem 0 0.625rem;
`;
