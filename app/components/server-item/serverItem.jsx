import React, { useEffect, useState } from "react";
import { ItemContainer, InnerItemContainer, Divider } from "./serverItem.styles";

export default function ServerItem() {
  const [selected, setSelected] = useState(null);
  const [target, setTarget] = useState(null);
  const servers = new Array(5).fill({ name: "Aerver" });

  useEffect(() => {
    if (selected === null) return;
    const blueList = document.getElementsByClassName("active-item-blue");
    const greenList = document.getElementsByClassName("active-item-green");
    const fullList = Object.values(blueList).concat(Object.values(greenList));

    fullList.forEach((e) => e.classList.remove("active-item-blue", "active-item-green"));

    const len = servers.length - selected;
    target.classList.add(len >= 4 ? "active-item-blue" : "active-item-green");

  }, [selected, target, servers.length]);

  const handleSelection = (e, index) => {
    setTarget(e?.target);
    setSelected(index);
  };

  const getLastIndex = (arr) => arr.length - 1;
  const getItemInnerContent = (object) => (object ? object.name[0] : object.image);

  const dividerIndexes = [1, getLastIndex(servers)];

  return (
    <ItemContainer>
      {servers.map((server, index) => (
        <React.Fragment key={index}>
          {dividerIndexes.includes(index) && <Divider />}
          <InnerItemContainer selected={index === selected} onClick={(e) => handleSelection(e, index)}>
            {getItemInnerContent(server).toUpperCase()}
          </InnerItemContainer>
        </React.Fragment>
      ))}
    </ItemContainer>
  );
}
