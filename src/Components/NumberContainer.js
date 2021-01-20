import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../Constants/Colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.primary,
    alignSelf: "center",
    margin: 10,
  },
});
