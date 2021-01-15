import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import Card from "../Components/Card";
import Colors from "../Constants/Colors";

const StartGameScreen = () => {
  const [number, setNumber] = useState(0);
  const handleChange = () => {
    setNumber(number);
  };
  const handleReset = () => {
    setNumber(0);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Game</Text>
      <Card style={styles.inputContainer}>
        <Text style={{ fontSize: 36, alignSelf: "center" }}>{number}</Text>
        <TextInput
          style={styles.input}
          placeholder="Select a number"
          onChangeText={handleChange}
          value={number.toString()}
        />
        <View style={styles.buttonContainer}>
          <Pressable onPress={handleReset} style={styles.button}>
            <Text style={styles.buttonText}>RESET</Text>
          </Pressable>
          <Pressable onPress={handleChange} style={styles.button}>
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
  input: {
    width: "100%",
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 8,
    backgroundColor: "#f0eeee",
    fontSize: 16,
    padding: 10,
    height: 50,
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
