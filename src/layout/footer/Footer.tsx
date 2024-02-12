import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import { SocialList } from "../../components/socialList/SocialList";
import { S } from "./Footer_Styles";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction="column" align="center">
        <S.Name>Svetlana</S.Name>
        <SocialList />
        <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};
