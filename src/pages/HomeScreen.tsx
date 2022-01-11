import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import DefaultButton from "../components/atoms/DefaultButton";
import Subtext from "../components/atoms/Subtext";
import Title from "../components/atoms/Title";
import { AppStackParamList } from "../routes/app.routes";
import { palette } from "../theme/palette";
import Frame from "../assets/landscapeFrame.svg";
import Illustration from "../assets/womanIllu.svg";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: palette.main,
    paddingTop: 175,
  },
});

type HomeNavigationProp = StackNavigationProp<AppStackParamList>;
type HomeRouteProp = RouteProp<AppStackParamList>;

const HomeScreen = () => {
  const route = useRoute<HomeRouteProp>();
  const navigation = useNavigation<HomeNavigationProp>();

  const name = route?.params?.user.name;

  return (
    <View style={styles.container}>
      <Title
        label={`Hi ${name}, Welcome`}
        color={palette.lightYellow}
        textAlign="center"
        fontWeight="bold"
      />
      <Title
        label="to Silent Moon"
        color={palette.lightYellow}
        textAlign="center"
        fontWeight="300"
      />
      <Subtext
        label="Explore the app, Find some peace of mind to prepare for meditation."
        color={palette.lightYellow}
        textAlign="center"
      />
      <Frame
        style={{
          position: "absolute",
          top: 350,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Illustration />
      <View
        style={{
          backgroundColor: palette.lightMain,
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          width: "100%",
        }}
      >
        <DefaultButton
          label="get started"
          backgroundColor={palette.lightGrey}
          color={palette.darkGray}
          onClick={() => navigation.navigate("Topics")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
