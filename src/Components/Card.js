import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../Constants/Colors";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    shadowColor: Colors.accent,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    elevation: 5,
    padding: 30,
  },
});
