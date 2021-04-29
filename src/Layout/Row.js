import React from 'react';
import { RowElement } from './Layout.style';

const Row = ({ children, style }) => {
    return (
        <RowElement style={style}>
            {children}
        </RowElement>
    );
};

export default Row;
