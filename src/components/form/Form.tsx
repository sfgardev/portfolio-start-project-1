import React from "react";
import { Button } from "../Button";
import { S } from "./Form_Styles";

export const Form: React.FC = () => {
  return (
    <S.Form>
      <S.Field placeholder="name" />
      <S.Field placeholder="subject" />
      <S.Field as="textarea" placeholder="message" />
      <Button>Send message</Button>
    </S.Form>
  );
};
