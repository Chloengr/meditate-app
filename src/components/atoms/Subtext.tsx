import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  title: { fontSize: 16, fontWeight: "300", width: 300, marginTop: 15, marginBottom: 70 },
});

interface Props {
  label: string;
  color: any;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
}

const Subtext = ({ label, color, textAlign }: Props) => {
  return (
    <Text style={[styles.title, color && { color }, textAlign && { textAlign }]}>{label}</Text>
  );
};

export default Subtext;
// https://connect.deezer.com/oauth/auth.php?app_id=521502&redirect_uri=https://www.example.com

// https://connect.deezer.com/oauth/access_token.php?app_id=521502&secret=b9281f9a7d867e8312e59b9aeeeed93a&code=fr82746dcb09520f9f3cdd45fcf1f622

// fr2q8dyIqhwyjqd5nwEu1ftFcUJ1jrjpZRsH2YUyEjEx9inQNLL&expires=3600