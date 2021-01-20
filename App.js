import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./src/Components/Header";
import GameScreen from "./src/Screens/GameScreen";
import StartGameScreen from "./src/Screens/StartGameScreen";

export default function App() {
  const [switchScreen, setSwitchScreen] = useState(false);

  const screenSwitchHandler = (status) => {
    setSwitchScreen(status);
  };
  return (
    <View style={styles.screen}>
      <Header title={"Guess a number"} />
      {switchScreen ? (
        <GameScreen screen={screenSwitchHandler} myNum={0} />
      ) : (
        <StartGameScreen screen={screenSwitchHandler} myNum={0} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
