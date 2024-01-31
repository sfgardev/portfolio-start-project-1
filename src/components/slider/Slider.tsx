import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

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
          <SlideText>@ivan ivanow</SlideText>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;
`;
const Slide = styled.div`
  text-align: center;
`;
const SlideText = styled.p``;

const SlideName = styled.span``;

const Pagination = styled.div`
  text-align: center;
  
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    border-radius: 4px;
    background-color: #de1c1c;
  }
`;
