import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import AuthContext from "../../contexts/Authcontext";
import { palette } from "../../theme/palette";
import DefaultButton from "../atoms/DefaultButton";
import DefaultInput from "../atoms/DefaultInput";
import Subtext from "../atoms/Subtext";
import TextLink from "../atoms/TextLink";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SignInForm = () => {
  const { signIn } = useContext(AuthContext);

  const [email, onChangeEmail] = useState<string>();
  const [password, onChangePassword] = useState<string>();

 
  async function handleSignin() {
    await signIn();
  }
  return (
    <ScrollView style={styles.container}>
      <TextLink label="Sign in with email and password"/>
      <DefaultInput placeholder="Email address" value={email} onChangeValue={onChangeEmail} />
      <DefaultInput placeholder="Password" value={password} onChangeValue={onChangePassword} />
      <DefaultButton
        label="Sign In"
        onClick={handleSignin}
        backgroundColor={palette.main}
        color={palette.white}
      />
      <Subtext label="Forgot password?" color={palette.darkGray} textAlign="center" />
    </ScrollView>
  );
};

export default SignInForm;
