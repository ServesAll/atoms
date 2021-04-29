import React from "react";
import { ItemWrapper } from "./Item.style";

const Item = ({ item, ListItems, style, lineColor }) => {
  return (
    <ItemWrapper style={style} lineColor={lineColor}>
      <ListItems {...item} />
    </ItemWrapper>
  );
};

export default Item;
