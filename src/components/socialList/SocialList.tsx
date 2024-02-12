import React from "react";
import { Icon } from "../icon/Icon";
import { S } from "./SocialList_Styles";

const socialItemData = ["instagram", "telegram", "vk", "linkedin"];

export const SocialList: React.FC = () => {
  return (
    <S.SocialList>
      {socialItemData.map((item) => (
        <S.SocialItem>
          <S.SocialLink href="#">
            <Icon height="21" width="21" viewBox="0 0 21 21" iconId={item} />
          </S.SocialLink>
        </S.SocialItem>
      ))}
    </S.SocialList>
  );
};
