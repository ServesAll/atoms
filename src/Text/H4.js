import React from "react";
import PropTypes from "prop-types";
import { H4 } from "./Text.style";

const H4Text = ({
  children,
  style,
  align = "left",
  color,
  fontFamily,
  ...rest
}) => {
  return (
    <H4
      {...rest}
      style={style}
      align={align}
      color={color}
      fontFamily={fontFamily}
    >
      {children}
    </H4>
  );
};

H4Text.propTypes = {
  style: PropTypes.object,
};

export default H4Text;
