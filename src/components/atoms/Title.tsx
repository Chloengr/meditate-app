import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  title: { fontSize: 30, margin: 10 },
});

interface Props {
  label: string;
  color: any;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  fontWeight?:"normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
}

const Title = ({ label, color, textAlign, fontWeight }: Props) => {
  return (
    <Text style={[styles.title, color && { color }, textAlign && { textAlign }, fontWeight && { fontWeight }]}>{label}</Text>
  );
};

export default Title;
