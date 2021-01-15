import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
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
