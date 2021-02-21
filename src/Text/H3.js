import React from 'react';
import PropTypes from 'prop-types';
import { H3 } from './Text.style';

const H3Text = ({ children, style, align='left', color }) => {
    return (
        <H3 style={style} align={align} color={color}>
            {children}
        </H3>
    );
};

H3Text.propTypes = {
    style: PropTypes.object,
};

export default H3Text;
