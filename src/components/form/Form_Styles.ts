import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Form = styled.form`
  max-width: 33.75rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  textarea {
    resize: none;
    height: 9.69rem;
  }
`;

const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 0.4375rem 0.9375rem;
  font-family: inherit;
  color: ${theme.colors.font};
  font-size: 0.75rem;
  letter-spacing: 5%;

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
`;

export const S = {
  Form,
  Field,
};
