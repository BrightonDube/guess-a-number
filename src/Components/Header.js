import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontFamily: "Roboto",
    fontSize: 22,
    color: "white",
    top: 20,
  },
});
export default Header;
