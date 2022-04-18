import React, { useEffect, useState, useRef } from "react";
import { H3 } from "../../Text";
import { KeyboardAvoidingView, Platform } from "react-native";
import { InputWrapper, InputElement, BorderWrapper } from "./Animated.style";
import LineAnimation from "./LineAnimation";
import Placeholder from "./Placeholder";

const Input = ({
  children,
  style,
  borderColorIdle,
  borderColorActive,
  borderColorError,
  textChange = () => {},
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
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [textValue, setTextValue] = useState(value || defaultValue);
  const inputRef = useRef();

  useEffect(() => {
    textChange(textValue);
  }, [textValue]);

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
          setIsFocused(true);
          inputRef.current?.focus();
        }}
      >
        <Placeholder active={isFocused || (textValue && textValue.length > 0)}>
          {!hasError ? (
            children
          ) : (
            <H3 color={borderColorError}>{error || hasError}</H3>
          )}
        </Placeholder>
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
          style={style}
        />
        <BorderWrapper>
          <LineAnimation
            active={isFocused}
            borderColorActive={borderColorActive}
            borderColorIdle={borderColorIdle}
            borderColorError={borderColorError}
            hasError={hasError}
          />
        </BorderWrapper>
      </InputWrapper>
    </KeyboardAvoidingView>
  );
};

export default Input;
