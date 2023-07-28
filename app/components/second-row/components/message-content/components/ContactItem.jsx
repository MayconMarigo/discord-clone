import { ContactItemButton, IconAndMessageContainer } from "./ContactItem.styles";
import OfferDiv from "./offer-div/OfferDiv";
import { useEffect, useState } from "react";

export default function ContactItems({ icon, description, hasOffer, onClick, selected }) {
  const [onMouseDown, setOnMouseDown] = useState(false);

  return (
    <ContactItemButton
      onMouseDown={() => setOnMouseDown(true)}
      onMouseUp={() => setOnMouseDown(false)}
      pressed={onMouseDown}
      selected={selected}
      onClick={onClick}
    >
      <IconAndMessageContainer>
        {icon}
        {description}
      </IconAndMessageContainer>
      {hasOffer && <OfferDiv />}
    </ContactItemButton>
  );
}
