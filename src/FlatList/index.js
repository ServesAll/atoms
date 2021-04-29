import React from 'react';
import { ListWrapper } from './List.style';
import ListLine from './ListLine';
import ListDefault from './ListDefault';

const FlatList = ({ children }) => {
    return (
        <ListWrapper>
            {children}
        </ListWrapper>
    );
};

FlatList.Line = (props) => {
    return <ListLine {...props} />
};

FlatList.Normal = (props) => {
    return <ListDefault {...props} />
};

export default FlatList;
