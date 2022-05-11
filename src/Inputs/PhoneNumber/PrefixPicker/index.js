import React, { useMemo, useCallback, useState, useEffect } from "react";
import { View, StatusBar } from "react-native";
import {
  FullScreen,
  Center,
  Loader,
  Success,
  Error,
  Switch,
  Row,
  Box,
  Margin,
  MarginHorizontal,
  MarginVertical,
  Padding,
  H4,
  H2,
  H3,
  RoundedBtn,
  ErrorText,
  MarginRight,
  MarginBottom,
  PaddingVertical,
  PaddingTop,
  useThemeContext,
  Input,
} from "@servesall/atoms";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetFooter,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useSubmitHook } from "@servesall/organisms";
import {
  UserRolesQueryProvider,
  useUserRoles,
  UPDATE_MERCHANT_USER,
} from "@servesall/merchantglobalstate";
import LottieView from "lottie-react-native";

export default function NewUser({ data }) {
  const { merchant } = data;
  const [selectedRole, setSelectedRole] = useState(false);
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userPrefix, setUserPrefix] = useState("+356");
  const theme = useThemeContext();
  const navigation = useNavigation();

  const { submitForm, loading, success, error, errorText } = useSubmitHook({
    gql: UPDATE_MERCHANT_USER,
    formState: { isValid: true, isDirty: true },
  });

  useEffect(() => {
    success && setTimeout(() => navigation.goBack(), 1000);
  }, [success]);

  const submit = () => {};

  // variables
  const snapPoints = useMemo(() => ["90%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    if (index === -1) {
      navigation.goBack();
    }
  }, []);

  const renderFooter = useCallback(
    (props) => (
      <BottomSheetFooter {...props} bottomInset={0}>
        <View
          style={{
            backgroundColor: theme.color1,
            borderTopWidth: 2,
            borderColor: theme.color7,
          }}
        >
          <Margin>
            <RoundedBtn
              active={
                userPrefix !== "" && userPhoneNumber !== "" && selectedRole
              }
              size="small"
              color={theme.color2}
              onClick={submit}
            >
              <Center>
                <H3 color={theme.color1}>Save</H3>
              </Center>
            </RoundedBtn>
          </Margin>
        </View>
      </BottomSheetFooter>
    ),
    [selectedRole, userPhoneNumber, userPrefix]
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0, 0, 0, 0.4)" />

      <BottomSheet
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        footerComponent={renderFooter}
      >
        <BottomSheetScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          {loading && (
            <FullScreen style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
              <Center>
                <Loader color={theme.color2} />
              </Center>
            </FullScreen>
          )}

          {success && (
            <FullScreen style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
              <Center>
                <Success />
              </Center>
            </FullScreen>
          )}

          {error && (
            <FullScreen style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
              <Center>
                <Error />
              </Center>
            </FullScreen>
          )}
          <Box>
            <View style={{ borderBottomWidth: 2, borderColor: theme.color7 }}>
              <Margin style={{ alignItems: "center" }}>
                <LottieView
                  style={{
                    width: 80,
                  }}
                  autoPlay={true}
                  loop={true}
                  source={adduser}
                />
                <PaddingTop>
                  <H3>Add a new user to {merchant.profile.name}</H3>
                </PaddingTop>
              </Margin>
            </View>

            <Margin>
              {errorText && (
                <PaddingVertical>
                  <ErrorText>
                    <Center>
                      <Padding>
                        <H4 color={theme.red}>{errorText}</H4>
                      </Padding>
                    </Center>
                  </ErrorText>
                </PaddingVertical>
              )}
            </Margin>

            <MarginBottom>
              <Margin>
                <H3>User phone number</H3>
              </Margin>
              <UserPhone
                theme={theme}
                setUserPhoneNumber={setUserPhoneNumber}
                setUserPrefix={setUserPrefix}
                userPrefix={userPrefix}
              />
            </MarginBottom>

            <Margin>
              <PaddingVertical>
                <H3>Choose Role</H3>
              </PaddingVertical>
              <UserRolesQueryProvider>
                <Roles
                  selectedRole={selectedRole}
                  setSelectedRole={setSelectedRole}
                  theme={theme}
                />
              </UserRolesQueryProvider>
            </Margin>
          </Box>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
}
