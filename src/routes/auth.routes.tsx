import React from "react";
import SignInScreen from "../pages/SignInScreen";
import OnboardingScreen from "../pages/OnboardingScreen";

import { createStackNavigator } from "@react-navigation/stack";
import BackButon from "../assets/backbtn.svg";
import LogoHeaderBlack from "../assets/textLogoB.svg";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backbutton: {
    margin: 20,
  },
});

export type AuthStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerTransparent: true,
    }}
  >
    <AuthStack.Screen
      name="Onboarding"
      component={OnboardingScreen}
      options={{ headerTitle: () => <LogoHeaderBlack /> }}
    />
    <AuthStack.Screen
      name="SignIn"
      component={SignInScreen}
      options={() => ({
        headerStyle: {
          height: 150,
        },
        headerBackTitleVisible: false,
        headerTitle: "",
        headerBackImage: () => <BackButon style={styles.backbutton} />,
      })}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
