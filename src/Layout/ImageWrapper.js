import React from "react";
import { ImageWrapperElement } from "./Layout.style";

const ImageWrapper = ({ children, box = false, style }) => {
  return (
    <ImageWrapperElement style={{ ...style }}>{children}</ImageWrapperElement>
  );
};

export default ImageWrapper;
