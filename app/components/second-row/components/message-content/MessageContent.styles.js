import { GlobalStyles } from "@/app/theme/Global.styles";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

export const SecondRowHeader = styled.div`
  border-bottom: 1px solid ${GlobalStyles.navigationContainer};
  padding: ${GlobalStyles.padding} 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SecondRowBody = styled.div`
  padding: ${GlobalStyles.padding};
`;

export const SecondRowFooter = styled.div`
  padding: ${GlobalStyles.padding};
  background-color: ${GlobalStyles.contactsFooter};
`;

export const HeaderButton = styled.button`
  outline: 0;
  width: 100%;
  height: 28px;
  border-radius: 5px;
  border: 0;
  background-color: #1e1f22;
  color: ${GlobalStyles.fonts.secondRowColor};
  cursor: pointer;
`;

export const DefaultConfigItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DirectMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${GlobalStyles.fonts.secondRowColor};
  padding: 0 12px;
  margin-top: 17px;
  &:hover{
    > span {
      color: ${GlobalStyles.fonts.secondRowColorHover};
    }
  }
`;

export const DirectMessageText = styled.span`
  font-size: 11px;
  font-weight: 600;
`;

export const CustomAddIcon = styled(AddIcon)`
  font-size: 18px;
  &:hover{
    color: ${GlobalStyles.fonts.secondRowColorHover};
  };
  cursor: pointer;
`;

export const ContactsContainer = styled.div`

`;
