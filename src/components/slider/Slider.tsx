import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { S } from "./Slider_Styles";
import '../../styles/slider.css'

type SlideProps = {
  text: string;
  username: string;
};

const Slide: React.FC<SlideProps> = (props) => {
  return (
    <S.Slide>
      <S.SlideText>{props.text}</S.SlideText>
      <S.SlideName>@{props.username}</S.SlideName>
    </S.Slide>
  );
};

const items = [
  <Slide
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    username="ivan ivanow"
  />,
  <Slide
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    username="petr petrow"
  />,
  <Slide
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    username="igor igorew"
  />,
];

export const Slider = () => (
  <S.Slider>
    <AliceCarousel disableButtonsControls mouseTracking items={items} />
  </S.Slider>
);

// import React from "react";
// import { FlexWrapper } from "../FlexWrapper";
// import { S } from "./Slider_Styles";

// export const Slider: React.FC = () => {
//   return (
//     <S.Slider>
//       <FlexWrapper>
//         <S.Slide>
//           <S.SlideText>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//           </S.SlideText>
//           <S.SlideName>@ivan ivanow</S.SlideName>
//         </S.Slide>
//       </FlexWrapper>
//       <S.Pagination>
//         <span></span>
//         <span className="active"></span>
//         <span></span>
//       </S.Pagination>
//     </S.Slider>
//   );
// };
