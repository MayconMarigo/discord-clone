import { GlobalStyles } from "@/app/theme/Global.styles";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${GlobalStyles.navigationContainer};
  overflow-y: scroll;

  &::-webkit-scrollbar{
    display: none;
  }
`;