import React from "react";
import { CenterElement } from "./Layout.style";

const Center = ({ children, style, direction = false }) => {
  return (
    <CenterElement style={style} direction={direction}>
      {children}
    </CenterElement>
  );
};

export default Center;
