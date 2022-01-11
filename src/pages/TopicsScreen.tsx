import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Title from "../components/atoms/Title";
import TopicsList from "../components/molecules/TopicsList";
import { palette } from "../theme/palette";


const styles = StyleSheet.create({
  scrollContainer: { flex: 1 },
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: palette.white,
    paddingTop: 100,
  },
});


const TopicsScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Title
          label="What Brings you"
          color={palette.darkGray}
          textAlign="left"
          fontWeight="bold"
        />
        <Title label="to Silent Moon" color={palette.darkGray} textAlign="left" fontWeight="300" />
        <TopicsList/>
      </View>
    </ScrollView>
  );
};

export default TopicsScreen;
