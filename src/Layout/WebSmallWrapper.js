import React from "react";
import { WebSmallWrapperElement } from "./Layout.style";

const WebSmallWrapper = ({ children, style, direction = false }) => {
  return (
    <WebSmallWrapperElement style={style} direction={direction}>
      {children}
    </WebSmallWrapperElement>
  );
};

export default WebSmallWrapper;
