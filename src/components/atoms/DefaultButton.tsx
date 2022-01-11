import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    alignItems: "center",
    padding: 15,
    width: 300,
  },
  text: { fontSize: 14, textTransform: "uppercase" },
});

interface ButtonProps {
  label: string;
  onClick?: () => void;
  backgroundColor?: any;
  color?: any;
}

const DefaultButton = ({ label, onClick, backgroundColor, color }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.container, backgroundColor && { backgroundColor }]}
    >
      <Text style={[styles.text, color && { color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
