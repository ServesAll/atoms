import React from "react";
import { RoundedBoxElement } from "./Layout.style";

const RoundedBox = ({ children, styles }) => {
  return (
    <RoundedBoxElement styles={{ ...styles }}>{children}</RoundedBoxElement>
  );
};

export default RoundedBox;
