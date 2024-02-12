import React from "react";
import { S } from "../HeaderMenu_Styles";

export const Menu: React.FC<{ menuItems: string[] }> = (props) => {
  return (
    <ul>
      {props.menuItems.map((item) => (
        <S.MenuItem key={item}>
          <S.Link href={`#${item}`}>
            {item}
            <S.Mask>
              <span>{item}</span>
            </S.Mask>
            <S.Mask>
              <span>{item}</span>
            </S.Mask>
          </S.Link>
        </S.MenuItem>
      ))}
    </ul>
  );
};
