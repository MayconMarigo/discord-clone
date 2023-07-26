"use client";

import { ContactsBody, ContactsFooter, ContactsHeader, Container } from "./contactsmenu.styles";

export default function ContactsMenu() {
  return (
    <Container>
      <ContactsHeader>header</ContactsHeader>
      <ContactsBody>body</ContactsBody>
      <ContactsFooter>footer</ContactsFooter>
    </Container>
  );
}
