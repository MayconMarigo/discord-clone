import { GlobalStyles } from "@/app/theme/Global.styles";
import styled from "styled-components";

export const Container = styled.section`
  background-color: ${GlobalStyles.contactsContainer};
  display: grid;
  grid-template-rows: ${GlobalStyles.heights.contacts.header} 1fr ${GlobalStyles.heights.contacts.footer};
  `;

