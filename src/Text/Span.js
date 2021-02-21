import React from 'react';
import PropTypes from 'prop-types';
import { Span } from './Text.style';

const SpanText = ({ children, style, align='left', color }) => {
    return (
        <Span style={style} align={align} color={color}>
            {children}
        </Span>
    );
};

SpanText.propTypes = {
    style: PropTypes.object,
};

export default SpanText;
