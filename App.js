import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./src/Components/Header";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={"Guess a number"} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
