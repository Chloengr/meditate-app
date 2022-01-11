import React from "react";
import { StyleSheet, View } from "react-native";
import Frame from "../assets/signinFrame.svg";
import Title from "../components/atoms/Title";
import SignInForm from "../components/molecules/SignInForm";
import { palette } from "../theme/palette";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
    alignItems: "center",
  },
  title: {
    position: "absolute",
    marginTop: 130,
  },
});

const SignIn: React.FC = () => {
  return (
    <View style={styles.container}>
      <Frame />
      <View style={styles.title}>
        <Title label="Welcome back!" color={palette.darkGray} textAlign="center" />
      </View>
      <SignInForm />
    </View>
  );
};

export default SignIn;
