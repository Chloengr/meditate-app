import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 3,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 7,
    width: 130,
  },
});

interface Props {
  label: string;
  color: any;
  backgroundColor: any;
  illustration: Element;
  onPress: any;
}

const ColoredCard = ({ label, color, backgroundColor, illustration, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, backgroundColor && { backgroundColor }]}
      onPress={onPress}
    >
      {illustration}
      <Text style={[styles.text, color && { color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ColoredCard;
