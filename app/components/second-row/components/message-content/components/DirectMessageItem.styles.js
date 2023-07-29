import { GlobalStyles } from "@/app/theme/Global.styles";
import styled from "styled-components";

export const DirectMessageItemButton = styled.button`
  padding: ${GlobalStyles.buttonPadding};
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 0;
  font-weight: 600;
  font-size: 14.5px;
  background-color: ${({ selected, pressed }) => pressed ? "#35373c" : selected ? "#3b3d44" : "transparent"};
  color: ${({ selected }) => selected ? GlobalStyles.fonts.secondRowColorHover : GlobalStyles.fonts.secondRowColor};
  cursor: pointer;

  &:hover{
    background-color: ${({ selected, pressed }) => pressed ? "#3b3d44" : selected ? "#35373c" : GlobalStyles.hovers.secondRowItem};
    color: ${GlobalStyles.fonts.secondRowColorHover};
  }
  &:nth-of-type(2){
   justify-content: space-between;
  }
`;

export const IconAndMessageContainer = styled.div`
  display: inherit;
  align-items: inherit;
  gap: 16px;
`;