import React from "react";
import { Link } from "../../../../components/Link";
import { S } from "./TabMenu_Styles";

export const TabMenu: React.FC<{ menuItems: string[] }> = (props) => {
  return (
    <S.TabMenu>
      <ul>
        {props.menuItems.map((item) => (
          <S.ListItem key={item}>
            <Link href={`#${item}`}>{item}</Link>
          </S.ListItem>
        ))}
      </ul>
    </S.TabMenu>
  );
};
