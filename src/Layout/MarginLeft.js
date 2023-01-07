import React from "react";
import { MarginLeftElement } from "./Layout.style";

const MarginLeft = ({ children, style, direction = false }) => {
  return (
    <MarginLeftElement style={style} flexDirection={direction}>
      {children}
    </MarginLeftElement>
  );
};

export default MarginLeft;
