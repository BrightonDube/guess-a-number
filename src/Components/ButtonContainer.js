import React from "react";
import { StyleSheet, View } from "react-native";

const ButtonContainer = ({ children }) => {
  return <View style={styles.buttonContainer}>{children}</View>;
};

export default ButtonContainer;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    padding: 10,
  },
});
