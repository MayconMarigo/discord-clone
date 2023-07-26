import { GlobalStyles } from "@/app/theme/Global.styles";
import styled from "styled-components";

export const Container = styled.main`
  background-color: ${GlobalStyles.mainContainer};
  display: grid;
  grid-template-rows: ${GlobalStyles.heights.main.header} 1fr;
`;

export const MainHeader = styled.div`
  padding: ${GlobalStyles.padding};
  border-bottom: 1px solid ${GlobalStyles.mainContainerBorder};
`;

export const MainBody = styled.div`
  padding: ${GlobalStyles.padding};
`;