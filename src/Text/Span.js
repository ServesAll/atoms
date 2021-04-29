import React from "react";
import PropTypes from "prop-types";
import { Span } from "./Text.style";

const SpanText = ({
  children,
  style,
  align = "left",
  color,
  fontFamily,
  ...rest
}) => {
  return (
    <Span
      {...rest}
      style={style}
      align={align}
      color={color}
      fontFamily={fontFamily}
    >
      {children}
    </Span>
  );
};

SpanText.propTypes = {
  style: PropTypes.object,
};

export default SpanText;
