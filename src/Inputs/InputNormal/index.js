import React, { useEffect, useState, useRef } from "react";
import { H4 } from "../../Text";
import { MarginHorizontal, Row } from "../../Layout";
import { KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { InputWrapper, InputElement, BorderWrapper } from "./Animated.style";
import Placeholder from "./Placeholder";

const Input = ({
  children,
  style,
  borderColorIdle,
  borderColorActive,
  borderColorError,
  textChange = () => {},
  onPress = () => {},
  value,
  defaultValue,
  multiline = false,
  numberOfLines = 1,
  maxLength = 1000,
  autoFocus = false,
  keyboardType,
  editable = true,
  keyboardVerticalOffset = 0,
  hasError = false,
  error,
  isRightBound = false,
  isLeftBound = false,
  euro = false,
  focused = () => {},
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [textValue, setTextValue] = useState(value || defaultValue);
  const inputRef = useRef();

  useEffect(() => {
    focused();
  }, [isFocused]);

  useEffect(() => {
    textChange(textValue);
  }, [textValue]);

  useEffect(() => {
    defaultValue && setTextValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    autoFocus && inputRef.current?.focus();
  }, [autoFocus]);

  function blurTextInput() {
    inputRef.current?.blur();
  }

  useEffect(() => {
    const keyboardDidHideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      blurTextInput
    );

    return () => {
      keyboardDidHideSubscription?.remove();
    };
  }, []);

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
          isRightBound={isRightBound}
          isLeftBound={isLeftBound}
          active={isFocused}
          color={
            !hasError
              ? isFocused
                ? borderColorActive
                : borderColorIdle
              : borderColorError
          }
        >
          <Placeholder
            active={
              isFocused ||
              (textValue && textValue.length > 0) ||
              (value && value.length > 0)
            }
          >
            <MarginHorizontal>
              {!hasError ? (
                children
              ) : (
                <H4 color={borderColorError}>{error || hasError}</H4>
              )}
            </MarginHorizontal>
          </Placeholder>

          <MarginHorizontal>
            <Row>
              {euro &&
                (isFocused ||
                  (textValue && textValue.length > 0) ||
                  (value && value.length > 0)) && (
                  <Row style={{ minHeight: 40, alignItems: "center" }}>
                    {euro}
                  </Row>
                )}
              <InputElement
                ref={inputRef}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChangeText={(text) => setTextValue(text)}
                defaultValue={defaultValue}
                value={value}
                multiline={multiline}
                numberOfLines={numberOfLines}
                maxLength={maxLength}
                autoFocus={autoFocus}
                keyboardType={keyboardType}
                editable={editable}
                active={isFocused}
                style={style}
                returnKeyType="done"
                onSubmitEditing={blurTextInput}
              />
            </Row>
          </MarginHorizontal>
        </BorderWrapper>
      </InputWrapper>
    </KeyboardAvoidingView>
  );
};

export default Input;
