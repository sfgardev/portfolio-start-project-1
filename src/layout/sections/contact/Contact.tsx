import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Form } from "../../../components/form/Form";

export const Contact = () => {
  return (
    <StyledContact>
      <SectionTitle>Contact</SectionTitle>
      <Form />
    </StyledContact>
  );
};

const StyledContact = styled.section`
  min-height: 50vh;
  background-color: #eef398;
`;
