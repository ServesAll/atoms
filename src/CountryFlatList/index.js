import React, {
  useMemo,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import { countries } from "./Data";
import { H4 } from "../Text";
import { Margin, Box, MarginHorizontal, Row } from "../Layout";
import Input from "../Inputs/InputNormal";
import { theme } from "../Theme/definitions";
import { View, TouchableHighlight, Image } from "react-native";

import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

const Item = ({ item, setSelected, variant }) => {
  return (
    <MarginHorizontal>
      <View style={{ borderBottomWidth: 1, borderColor: theme.color10 }}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => setSelected(item)}
        >
          <Margin>
            <Row style={{ alignItems: "center" }}>
              <Image
                style={{ width: 50, height: 40 }}
                source={{
                  uri: item.src,
                }}
              />
              <Row>
                <Box style={{ flex: 4 }}>
                  <MarginHorizontal>
                    <H4>{item.name}</H4>
                  </MarginHorizontal>
                </Box>
                {variant === "countryCode" && (
                  <Box>
                    <MarginHorizontal>
                      <H4>{item.code}</H4>
                    </MarginHorizontal>
                  </Box>
                )}
              </Row>
            </Row>
          </Margin>
        </TouchableHighlight>
      </View>
    </MarginHorizontal>
  );
};

export default function NewCustomer({
  variant,
  onChange = () => {},
  onClose = () => {},
}) {
  const [data, setData] = useState(countries);
  const [noData, setNoData] = useState(false);
  const [selected, setSelected] = useState(false);
  const renderItem = ({ item }) => (
    <Item
      item={item}
      selected={selected}
      setSelected={setSelected}
      variant={variant}
    />
  );

  const sheetRef = useRef();

  useEffect(() => {
    if (selected) {
      onChange(selected);
      sheetRef.current?.close();
      onClose();
    }
  }, [selected]);

  const handleSheetChanges = useCallback((index) => {
    if (index === -1) {
      sheetRef.current?.close();
      onClose();
    }
  }, []);

  // variables
  const snapPoints = useMemo(() => ["90%"], []);

  const searchText = (e = "") => {
    let text = e.toLowerCase();

    let filteredName = countries.filter((item) => {
      return item.name.toLowerCase().match(text);
    });
    if (!text || text === "") {
      setData(countries);
    } else if (!Array.isArray(filteredName) && !filteredName.length) {
      // set no data flag to true so as to render flatlist conditionally
      setNoData(true);
    } else if (Array.isArray(filteredName)) {
      setData(filteredName);
      setNoData(false);
    }
  };

  const defaultProps = {
    keyboardVerticalOffset: 100,
    borderColorIdle: theme.color7,
    borderColorActive: theme.color2,
    borderColorError: theme.color6,
    textChange: (value) => {
      searchText(value);
    },
  };

  return (
    <BottomSheet
      index={0}
      ref={sheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      keyboardBehavior={"fillParent"}
      ListEmptyComponent={<H4>Not found</H4>}
    >
      <Margin>
        <Input autoFocus={false} {...defaultProps} error="Invalid">
          <H4>Search</H4>
        </Input>
      </Margin>
      <BottomSheetFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        windowSize={3}
        initialNumToRender={15}
        maxToRenderPerBatch={4}
        removeClippedSubviews={false}
        getItemLayout={(data, index) => ({
          length: 73,
          offset: 73 * index,
          index,
        })}
      />
    </BottomSheet>
  );
}
