import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
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

export const S = {
  Slider,
  Slide,
  SlideText,
  SlideName,
  Pagination,
};
