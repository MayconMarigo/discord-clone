"use client"

import { Container, MainBody, MainHeader } from "./maincontent.styles";

export default function Maincontent() {
  return (
    <Container>
      <MainHeader>
        header
      </MainHeader>
      <MainBody>
        body
      </MainBody>
    </Container>
  )
}