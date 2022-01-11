import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { palette } from "../../theme/palette";

const styles = StyleSheet.create({
  input: {
    backgroundColor: palette.grey,
    borderRadius: 15,
    height: 60,
    width: 300,
    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 25,
  },
});

interface Props {
  placeholder: string;
  value: any;
  onChangeValue: (value: any) => void;
}

const DefaultInput = ({ placeholder, value, onChangeValue }: Props) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeValue}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default DefaultInput;
