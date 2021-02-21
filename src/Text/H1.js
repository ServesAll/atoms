import React from 'react';
import PropTypes from 'prop-types';
import { H1 } from './Text.style';

const H1Text = ({ children, style, align='left', color }) => {
    return (
        <H1 style={style} align={align} color={color}>
            {children}
        </H1>
    );
};

H1Text.propTypes = {
    style: PropTypes.object,
};

export default H1Text;
