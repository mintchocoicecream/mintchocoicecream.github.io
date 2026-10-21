// src/screens/Contact.tsx
import {styled} from "styled-components";

export default function Contact() {
  return (
    <ContactWrapper>
      <Heading>Contact</Heading>
      <ContactInfo>contact me</ContactInfo>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  max-width: 900px;
  margin: 80px auto 0;
  padding: 0 20px;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
`;

const ContactInfo = styled.p`
  font-size: 1.1rem;
  opacity: 0.8;
`;