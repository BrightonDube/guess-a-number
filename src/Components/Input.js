import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ style, onChangeNum, number }) => {
  return (
    <TextInput
      style={{ ...styles.input, ...style }}
      placeholder="Select a number"
      onChangeText={onChangeNum}
      value={number.toString()}
      keyboardType="numeric"
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 8,
    backgroundColor: "#f0eeee",
    fontSize: 16,
    padding: 10,
    height: 50,
  },
});
