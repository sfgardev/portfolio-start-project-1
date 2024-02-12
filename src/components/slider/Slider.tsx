import React from "react";
import { FlexWrapper } from "../FlexWrapper";
import { S } from "./Slider_Styles";

export const Slider: React.FC = () => {
  return (
    <S.Slider>
      <FlexWrapper>
        <S.Slide>
          <S.SlideText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </S.SlideText>
          <S.SlideName>@ivan ivanow</S.SlideName>
        </S.Slide>
      </FlexWrapper>
      <S.Pagination>
        <span></span>
        <span className="active"></span>
        <span></span>
      </S.Pagination>
    </S.Slider>
  );
};
