import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import DefaultButton from "../components/atoms/DefaultButton";
import Subtext from "../components/atoms/Subtext";
import Title from "../components/atoms/Title";
import { AuthStackParamList } from "../routes/auth.routes";
import Frame from "../assets/onboardingFrame.svg";
import Illustration from "../assets/onboardingIllustration.svg";
import { palette } from "../theme/palette";
import TextLink from "../components/atoms/TextLink";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: palette.white,
  },
  illustration:{
    position: "absolute",
    marginTop: 150,
  }
});

type OnboardingScreenProp = StackNavigationProp<AuthStackParamList, "SignIn">;

const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenProp>();

  return (
    <View style={styles.container}>
      <Frame/>
      <Illustration style={styles.illustration}/>
      <Title label="We are what we do" color={palette.darkGray} textAlign="center" />
      <Subtext
        label="Thousand of people are usign silent moon for smalls meditation"
        color={palette.lightGray}
        textAlign="center"
      />
      <DefaultButton
        label="Log In to account"
        backgroundColor={palette.main}
        color={palette.white}
        onClick={() => navigation.navigate("SignIn")}
      />
      <TextLink label="You are new here? " link="create account" onClick={() => navigation.navigate("SignIn")}/>
    </View>
  );
};

export default OnboardingScreen;
