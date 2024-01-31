import styled from "styled-components";
import { Button } from "../Button";

export const Form = () => {
  return (
    <StyledForm>
      <Field placeholder="name" />
      <Field placeholder="subject" />
      <Field as="textarea" placeholder="message" />
      <Button>Send message</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Field = styled.input``;
