import { GlobalStyles } from "@/app/theme/Global.styles";
import styled from "styled-components";

export const Container = styled.section`
  background-color: ${GlobalStyles.contactsContainer};
  display: grid;
  grid-template-rows: ${GlobalStyles.heights.contacts.header} 1fr ${GlobalStyles.heights.contacts.footer};
  `;

  export const ContactsHeader = styled.div`
  border-bottom: 1px solid ${GlobalStyles.navigationContainer};
  padding: ${GlobalStyles.padding};
`;

export const ContactsBody = styled.div`
  padding: ${GlobalStyles.padding};
`;

export const ContactsFooter = styled.div`
  padding: ${GlobalStyles.padding};
  background-color: ${GlobalStyles.contactsFooter};
`;