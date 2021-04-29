import React from 'react';
import { FullScreenElement } from './Layout.style';

const FullScreen = ({ children, style }) => {
    return (
        <FullScreenElement style={style}>
            {children}
        </FullScreenElement>
    );
};

export default FullScreen;
