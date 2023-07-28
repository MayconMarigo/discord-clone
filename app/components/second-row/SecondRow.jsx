"use client";

import MessageContent from "./components/message-content/MessageContent";
import { Container } from "./SecondRow.styles";
import { useEffect, useState } from "react";

export default function SecondRow({ content }) {
  const [type, setType] = useState(null);

  useEffect(() => {
    const types = {
      message: <MessageContent />,
    };
    (() =>
      Object.keys(types).forEach((t) => {
        if (content?.type == t) {
          return setType(types[t]);
        };
      }))();

  }, [content?.type]);

  return <Container>{type}</Container>;
}
