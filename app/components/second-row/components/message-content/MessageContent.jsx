import { useState } from "react";
import { defaultConfigItems } from "./ConfigItemsArray";
import {
  ContactsContainer,
  CustomAddIcon,
  DefaultConfigItemsContainer,
  DirectMessageContainer,
  DirectMessageText,
  HeaderButton,
  SecondRowBody,
  SecondRowFooter,
  SecondRowHeader,
} from "./MessageContent.styles";

import { Tooltip } from "@mui/material";
import DirectMessageItem from "./components/DirectMessageItem";
import ContactItem from "./components/contact-item/ContactItem";
export default function MessageContent() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <SecondRowHeader>
        <HeaderButton onClick={() => alert("implementando...")}>Encontre ou comece uma conver...</HeaderButton>
      </SecondRowHeader>
      <SecondRowBody>
        <DefaultConfigItemsContainer>
          {defaultConfigItems.map((item, index) => (
            <DirectMessageItem
              key={item.id}
              {...item}
              selected={selected === index}
              onClick={() => setSelected(index)}
            />
          ))}
        </DefaultConfigItemsContainer>
        <DirectMessageContainer>
          <DirectMessageText>MENSAGENS DIRETAS</DirectMessageText>
          <Tooltip title="Criar MD" arrow placement="top">
            <CustomAddIcon />
          </Tooltip>
        </DirectMessageContainer>
        <ContactsContainer>
          <ContactItem content={{ name: "Maycon Marigo" }} />
        </ContactsContainer>
      </SecondRowBody>
      <SecondRowFooter>footer</SecondRowFooter>
    </>
  );
}
