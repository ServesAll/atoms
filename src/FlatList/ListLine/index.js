import React from "react";
import { FlatList } from "react-native";
import { ListItemsWrapper } from "./Item.style";
import Item from "./Item";
import DividerItem from "./Divider";

const ListItems = ({
  itemsArray,
  ListItemChild,
  style,
  ListFooterComponent,
  lineColor,
  ListHeaderComponent,
}) => {
  const returnDivider = ({ dividerName, idx, index, dividerKey }) => {
    if (itemsArray[index - 1]) {
      return itemsArray[index - 1][dividerKey][idx].name !== dividerName;
    }
    return dividerName && true;
  };

  const renderItem = ({ item, index }) => {
    return (
      <>
        {item.Divider.map(
          (itm, idx) =>
            returnDivider({
              dividerName: itm.name,
              idx,
              index,
              dividerKey: "Divider",
            }) && (
              <DividerItem
                lineColor={lineColor}
                key={`${index}divider`}
                Divider={itm.value}
                name={itm.name}
              />
            )
        )}
        {item.Divider2 &&
          item.Divider2.map(
            (itm, idx) =>
              returnDivider({
                dividerName: itm.name,
                idx,
                index,
                dividerKey: "Divider2",
              }) && (
                <DividerItem
                  dividerTwo={true}
                  lineColor={lineColor}
                  key={`${index}divider2`}
                  Divider={itm.value}
                  name={itm.name}
                />
              )
          )}

        <Item
          index={index}
          ListItems={ListItemChild}
          item={item}
          lineColor={lineColor}
        />
      </>
    );
  };

  return (
    <ListItemsWrapper style={style}>
      <FlatList
        data={itemsArray}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
      />
    </ListItemsWrapper>
  );
};

export default ListItems;
