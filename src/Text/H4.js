import React from 'react';
import PropTypes from 'prop-types';
import { H4 } from './Text.style';

const H4Text = ({ children, style, align='left', color }) => {
    return (
        <H4 style={style} align={align} color={color}>
            {children}
        </H4>
    );
};

H4Text.propTypes = {
    style: PropTypes.object,
};

export default H4Text;
