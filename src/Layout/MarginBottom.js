import React from 'react';
import { MarginBottomElement } from './Layout.style';

const MarginBottom = ({ children, style, direction = false }) => {
    return (
        <MarginBottomElement style={style} flexDirection={direction}>
            {children}
        </MarginBottomElement>
    );
};

export default MarginBottom;
