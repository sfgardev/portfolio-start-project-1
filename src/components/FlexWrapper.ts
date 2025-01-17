import { CSSProperties } from "react";
import styled from "styled-components";

type FlexWrapperProps = {
  direction?: CSSProperties["flexDirection"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  $wrap?: boolean;
};

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  height: 100%;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.$wrap && "wrap"};
`;
