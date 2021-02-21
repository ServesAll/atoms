import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from './Text.style';

const H2Text = ({ children, style, align='left', color }) => {
    return (
        <H2 style={style} align={align} color={color}>
            {children}
        </H2>
    );
};

H2Text.propTypes = {
    style: PropTypes.object,
};

export default H2Text;
