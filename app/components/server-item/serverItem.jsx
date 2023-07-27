import React, { useEffect, useState } from "react";
import { ItemContainer, InnerItemContainer, Divider } from "./serverItem.styles";
import { getLastIndex } from "@/app/utils/arrayUtils";
import { serversConfigItems } from "./serverConfigItems";
import { convertStringToUpperCase } from "@/app/utils/stringUtils";

export default function ServerItem() {
  const [selected, setSelected] = useState(null);
  const [target, setTarget] = useState(null);

  const dynamicServers = new Array(10).fill({ name: "Servers"});
  const servers = dynamicServers.concat(serversConfigItems);

  useEffect(() => {
    if (selected === null) return;

    const len = servers.length - selected;
    target.classList.add(len >= 4 ? "active-item-blue" : "active-item-green");
  }, [selected, target, servers.length]);

  const handleSelection = (e, index) => {
    setTarget(e?.target);
    setSelected(index);
  };

  const getItemInnerContent = (object) => (!object.image ? convertStringToUpperCase(object.name[0]) : object.image);

  const dividerIndexes = [1, getLastIndex(servers)];

  return (
    <ItemContainer>
      {servers.map((server, index) => (
        <React.Fragment key={`${server.id}-${index}`}>
          {dividerIndexes.includes(index) && <Divider />}
          <InnerItemContainer selected={index === selected} onClick={(e) => handleSelection(e, index)}>
            {getItemInnerContent(server)}
          </InnerItemContainer>
        </React.Fragment>
      ))}
    </ItemContainer>
  );
}
