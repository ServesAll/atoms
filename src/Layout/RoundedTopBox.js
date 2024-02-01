import React from "react";
import { BoxElement } from "./Layout.style";

const RoundedTopBox = ({ children, color = "", style, direction = false }) => {
  return (
    <BoxElement
      style={{
        backgroundColor: color,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        ...style,
      }}
      direction={direction}
    >
      {children}
    </BoxElement>
  );
};

export default RoundedTopBox;
