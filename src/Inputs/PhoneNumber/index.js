import React, { useEffect, useState, useRef } from "react";
import { H4 } from "../../Text";
import { MarginHorizontal, Row, Box } from "../../Layout";
import { KeyboardAvoidingView, Platform } from "react-native";
import { InputWrapper, InputElement, BorderWrapper } from "./Animated.style";
import Placeholder from "./Placeholder";

const InputPhone = ({
  children,
  style,
  borderColorIdle,
  borderColorActive,
  borderColorError,
  textChangePrefix = () => {},
  textChangeNumber = () => {},
  onPress = () => {},
  valuePrefix,
  valueNumber,
  defaultValuePrefix,
  defaultValueNumber,
  multiline = false,
  numberOfLines = 1,
  maxLength = 1000,
  autoFocus = false,
  keyboardType,
  editable = true,
  keyboardVerticalOffset = 0,
  hasError = false,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [textValue, setTextValue] = useState(valuePrefix || defaultValuePrefix);
  const [isFocusedPrefix, setIsFocusedPrefix] = useState(false);
  const [textPrefixValue, setTextPrefixValue] = useState(
    valueNumber || defaultValueNumber
  );
  const inputRef = useRef();

  useEffect(() => {
    textChangeNumber(textValue);
  }, [textValue]);

  useEffect(() => {
    textChangePrefix(textPrefixValue);
  }, [textPrefixValue]);

  useEffect(() => {
    autoFocus && inputRef.current?.focus();
  }, [autoFocus]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <InputWrapper
        onPress={() => {
          onPress();
          editable && setIsFocused(true);
          editable && inputRef.current?.focus();
        }}
      >
        <BorderWrapper
          active={isFocused}
          color={
            !hasError
              ? isFocused
                ? borderColorActive
                : borderColorIdle
              : borderColorError
          }
        >
          <Row style={{ backgroundColor: "red", width: "100%" }}>
            <Box>
              <Placeholder
                active={
                  isFocusedPrefix ||
                  (textPrefixValue && textPrefixValue.length > 0) ||
                  (valuePrefix && valuePrefix.length > 0)
                }
              >
                <MarginHorizontal>
                  {!hasError ? (
                    children[0]
                  ) : (
                    <H4 color={borderColorError}>{error || hasError}</H4>
                  )}
                </MarginHorizontal>
              </Placeholder>
            </Box>
            <Box>
              <Placeholder
                active={
                  isFocused ||
                  (textValue && textValue.length > 0) ||
                  (valueNumber && valueNumber.length > 0)
                }
              >
                <MarginHorizontal>
                  {!hasError ? (
                    children[1]
                  ) : (
                    <H4 color={borderColorError}>{error || hasError}</H4>
                  )}
                </MarginHorizontal>
              </Placeholder>
            </Box>
          </Row>

          <MarginHorizontal>
            <Row>
              <InputElement
                onFocus={() => setIsFocusedPrefix(true)}
                onBlur={() => setIsFocusedPrefix(false)}
                onChangeText={(text) => setTextPrefixValue(text)}
                defaultValue={defaultValuePrefix}
                value={valuePrefix}
                multiline={multiline}
                numberOfLines={numberOfLines}
                maxLength={maxLength}
                autoFocus={autoFocus}
                keyboardType={keyboardType}
                editable={editable}
                active={isFocusedPrefix}
                style={style}
              />
              <InputElement
                ref={inputRef}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChangeText={(text) => setTextValue(text)}
                defaultValue={defaultValueNumber}
                value={valueNumber}
                multiline={multiline}
                numberOfLines={numberOfLines}
                maxLength={maxLength}
                autoFocus={autoFocus}
                keyboardType={keyboardType}
                editable={editable}
                active={isFocused}
                style={style}
              />
            </Row>
          </MarginHorizontal>
        </BorderWrapper>
      </InputWrapper>
    </KeyboardAvoidingView>
  );
};

export default InputPhone;
