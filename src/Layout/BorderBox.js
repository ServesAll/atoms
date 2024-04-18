import React from "react";
import { BorderBoxElement } from "./Layout.style";

const BorderBox = ({ children, style }) => {
  return <BorderBoxElement style={{ ...style }}>{children}</BorderBoxElement>;
};

export default BorderBox;
