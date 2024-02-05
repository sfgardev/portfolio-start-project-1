import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconWrapper } from "../skills/skill/Skill";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <FlexWrapper direction="column" align="center">
        <SectionTitle>Testimony</SectionTitle>
        <IconWrapper>
          <Icon iconId="quote" />
        </IconWrapper>
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  ${IconWrapper} {
    margin: 3.75rem 0 4.5rem;
  }
`;
