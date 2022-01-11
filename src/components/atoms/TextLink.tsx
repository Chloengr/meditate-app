import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { palette } from "../../theme/palette";

const styles = StyleSheet.create({
  container: {
      flexDirection: "row",
    alignItems: "center",
    padding: 25,
  },
  text: { fontSize: 14, textTransform: "uppercase", color: palette.lightGray },
  link: { fontSize: 14, textTransform: "uppercase", color: palette.main },
});

interface LinkProps {
  label: string;
  link?: string;
  onClick?: () => void;
}

const TextLink = ({ label, link, onClick }: LinkProps) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      {link && <Text style={styles.link}>{link}</Text>}
    </TouchableOpacity>
  );
};

export default TextLink;
