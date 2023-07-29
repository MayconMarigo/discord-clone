import { useState } from "react";
import { DirectMessageItemButton, IconAndMessageContainer } from "./DirectMessageItem.styles";
import OfferDiv from "./offer-div/OfferDiv";

export default function DirectMessageItems({ icon, description, hasOffer, onClick, selected }) {
  const [onMouseDown, setOnMouseDown] = useState(false);

  return (
    <DirectMessageItemButton
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
    </DirectMessageItemButton>
  );
}
