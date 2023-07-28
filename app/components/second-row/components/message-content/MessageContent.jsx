import { useState } from "react";
import { defaultConfigItems } from "./ConfigItemsArray";
import {
  DefaultConfigItemsContainer,
  HeaderButton,
  SecondRowBody,
  SecondRowFooter,
  SecondRowHeader,
} from "./MessageContent.styles";
import ContactItem from "./components/ContactItem";
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
            <ContactItem key={item.id} {...item} selected={selected === index} onClick={() => setSelected(index)} />
          ))}
        </DefaultConfigItemsContainer>
      </SecondRowBody>
      <SecondRowFooter>footer</SecondRowFooter>
    </>
  );
}
