import React from "react";
import { Link } from "../../../../components/Link";
import { S } from "./TabMenu_Styles";
import { TabsItem, TabsItemStatus } from "../Works";

type TabMenuProps = {
  tabsItems: TabsItem[];
  currentFilterStatus: TabsItemStatus;
  onChangeStatus: (status: TabsItemStatus) => void;
};

export const TabMenu: React.FC<TabMenuProps> = (props) => {
  return (
    <S.TabMenu>
      <ul>
        {props.tabsItems.map((item) => (
          <S.ListItem key={item.title}>
            <Link
              active={props.currentFilterStatus === item.status}
              as="button"
              onClick={() => props.onChangeStatus(item.status)}
            >
              {item.title}
            </Link>
          </S.ListItem>
        ))}
      </ul>
    </S.TabMenu>
  );
};
