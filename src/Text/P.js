import React from "react";
import PropTypes from "prop-types";
import { P } from "./Text.style";

const pText = ({
  children,
  style,
  align = "left",
  color,
  fontFamily,
  ...rest
}) => {
  return (
    <P
      {...rest}
      style={style}
      align={align}
      color={color}
      fontFamily={fontFamily}
    >
      {children}
    </P>
  );
};

pText.propTypes = {
  style: PropTypes.object,
};

export default pText;
