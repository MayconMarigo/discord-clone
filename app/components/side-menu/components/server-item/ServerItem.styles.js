import { GlobalStyles } from "@/app/theme/Global.styles";
import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 12px ${GlobalStyles.padding} 150px;
  gap: 8px;
  position: relative;
`;

export const InnerItemContainer = styled.div`
  background-color: ${({ color }) => color ? color : GlobalStyles.navigationDefaultColor};
  height: 48px;
  width: 48px;
  border-radius: 50%;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  user-select: none;

  &:before{
    content: "";
    width: ${({ selected }) => selected ? "4px" : "0px"};
    height: ${({ selected }) => selected ? "40px" : "20px"};
    border-radius: 0 15px 15px 0;
    background-color: #fff;
    position: absolute;
    left: 0 !important;
    transition: 0.1s;
  };

  svg{
  pointer-events: none;
  color: ${({ selected }) => selected ? "#fff" : "#23a559"};
  }

  &:hover{
    border-radius: 16px;
    background-color: ${GlobalStyles.navigationSelected};

    &:nth-last-child(-n + 4){
      background-color: ${GlobalStyles.navigationLastIndexes};
    };

    &:before{
      height: ${({ selected }) => selected ? '40px' : '20px'};
      width: 4px;
    }

    svg{
      color: #fff !important;
    }
  };
`;

export const Divider = styled.div`
  height: 2px;
  width: 32px;
  background-color: #35363c;
  border-radius: 2px;
`;
