import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Card from "../Components/Card";
import Input from "../Components/Input";
import Colors from "../Constants/Colors";

const StartGameScreen = () => {
  const [number, setNumber] = useState("");
  const handleChange = (num) => {
    setNumber(num);
  };
  const handleReset = () => {
    setNumber("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Game</Text>
      <Card style={styles.inputContainer}>
        <Text style={{ fontSize: 36, alignSelf: "center" }}>{number}</Text>

        <Input
          style={{ width: "100%" }}
          number={number}
          onChangeNum={handleChange}
        />

        <View style={styles.buttonContainer}>
          <Pressable onPress={handleReset} style={styles.button}>
            <Text style={styles.buttonText}>RESET</Text>
          </Pressable>
          <Pressable onPress={() => {}} style={styles.button}>
            <Text style={styles.buttonText}>CONFIRM</Text>
          </Pressable>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "90%",
    borderRadius: 8,
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  button: {
    borderRadius: 8,
    backgroundColor: Colors.accent,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default StartGameScreen;
