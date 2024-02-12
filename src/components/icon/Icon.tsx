import React from "react";
import sprite from "../../assets/images/icons-sprite.svg";

type IconProps = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width={props.width || "50px"}
      height={props.height || "50px"}
      viewBox={props.viewBox || "0 0 50 50"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href={`${sprite}#${props.iconId}`} />
    </svg>
  );
};
