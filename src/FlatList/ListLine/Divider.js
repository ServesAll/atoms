import React from "react";
import { DividerItemWrapper } from "./Item.style";

const DividerItem = ({ Divider, dividerTwo, lineColor, name }) => {
  return (
    <DividerItemWrapper lineColor={lineColor} dividerTwo={dividerTwo}>
      <Divider name={name} />
    </DividerItemWrapper>
  );
};

export default DividerItem;
