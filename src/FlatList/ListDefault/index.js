import React from 'react';
import { FlatList } from 'react-native';
import { ListItemsWrapper } from './Item.style';
import Item from './Item';

const ListItems = ({ itemsArray, ListItemChild, style, ListFooterComponent, ListHeaderComponent }) => {

    const renderItem = ({item, index}) => {
        return (
                <Item
                    index={index}
                    ListItems={ListItemChild}
                    item={item}
                />
        );
    };


    return (
        <ListItemsWrapper style={style}>
            <FlatList
                data={itemsArray}
                renderItem={renderItem}
                keyExtractor={(item, index) => { return index.toString() }}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
            />
        </ListItemsWrapper>
    );
};

export default ListItems;
