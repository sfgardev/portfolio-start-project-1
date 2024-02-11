import { theme } from "./Theme";

type FontProps = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeight?: number;
  fMin?: number;
  fMax?: number;
};

export const font = ({
  family,
  weight,
  color,
  lineHeight,
  fMin,
  fMax,
}: FontProps) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 22.5rem)/(90 - 22.5) * (${fMax} - ${fMin}) + ${fMin}rem);
`;
