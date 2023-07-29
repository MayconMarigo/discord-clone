import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { GlobalStyles } from "@/app/theme/Global.styles";

export const ContactItemButton = styled.button`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: 0;
  position: relative;
`;

export const CustomCloseIcon = styled(CloseIcon)`

`;

export const CustomUserBadgeContainer = styled.div`
  position: relative;
`;

export const CustomUserBadge = styled(Image)`
  border-radius: 50%;
`;

export const UserStatusCircle = styled.div`
  position: absolute;
  height: 16px;
  width: 16px;
  background-color: ${GlobalStyles.contactsContainer};
  bottom: 3px;
  right: -2px;
  border-radius: 50%;

  &:after{
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    left: 3px;
    top: 3px;
    border: 3px solid ${({ status }) => status ? status : GlobalStyles.fonts.secondRowColor};
    background-color: ${({ status }) => status};
    border-radius: 50%;
  };

  &:before{
    z-index: 1;
    position: absolute;
    content:"";
    width: 5.5px;
    height: 5.5px;
    bottom: 6.5px;
    right: 6.5px;
    border: 1px solid ${GlobalStyles.contactsContainer};
    background-color: ${GlobalStyles.contactsContainer};
    border-radius: 50%;
  }
`;

export const ContactName = styled.span`
  position: absolute;
  left: 50px;
`;