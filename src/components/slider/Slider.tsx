import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <SlideText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </SlideText>
          <SlideName>@ivan ivanow</SlideName>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span className="active"></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  max-width: 500px;
`;
const Slide = styled.div`
  text-align: center;
`;
const SlideText = styled.p``;

const SlideName = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 1.375rem 0 2.625rem;
`;

const Pagination = styled.div`
  text-align: center;

  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50px;
    background-color: #ffffff80;

    & + span {
      margin-left: 5px;
    }

    &.active {
      width: 20px;
      background-color: ${theme.colors.accent};
    }
  }
`;
