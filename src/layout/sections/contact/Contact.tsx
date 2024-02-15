import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Form } from "../../../components/form/Form";
import { Container } from "../../../components/Container";

export const Contact: React.FC = () => {
  return (
    <StyledContact id="contact">
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <Form />
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  position: relative;
`;
