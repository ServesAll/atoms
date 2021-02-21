import React from 'react';
import PropTypes from 'prop-types';
import { P } from './Text.style';

const pText = ({ children, style, align='left', color }) => {
    return (
        <P style={style} align={align} color={color}>
            {children}
        </P>
    );
};

pText.propTypes = {
    style: PropTypes.object,
};

export default pText;
