import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import ButtonContainer from "../Components/ButtonContainer";

import Card from "../Components/Card";
import Input from "../Components/Input";
import NumberContainer from "../Components/NumberContainer";
import Colors from "../Constants/Colors";
import GameScreen from "./GameScreen";

const StartGameScreen = () => {
  const [number, setNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedNumber, setConfirmedNumber] = useState();
  const [switchScreen, setSwitchScreen] = useState(false);

  const screenSwitchHandler = (status) => {
    setSwitchScreen(status);
    if (!switchScreen) handleReset();
  };

  const handleChange = (num) => {
    setNumber(num.replace(/[^0-9]/, ""));
  };
  const handleReset = () => {
    setNumber("");
    setConfirmed(false);
  };
  const handleConfirm = () => {
    const enteredNumber = parseInt(number);
    if (isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99) {
      setConfirmed(false);
      Alert.alert("Invalid Number", "Enter a number between 1-99", [
        {
          text: "Okay",
          onPress: () => {
            handleReset();
          },
          style: "destructive",
        },
      ]);
      return;
    }
    setConfirmed(true);
    setConfirmedNumber(enteredNumber);
    setNumber("");
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Fun guessing game</Text>
        {switchScreen ? (
          <GameScreen screen={screenSwitchHandler} myNum={confirmedNumber} />
        ) : (
          <Card style={styles.inputContainer}>
            {confirmed ? (
              <>
                <Text style={{ fontSize: 32, alignSelf: "center" }}>
                  You selected:
                </Text>
                <NumberContainer>{confirmedNumber}</NumberContainer>
                <Pressable
                  onPress={() => screenSwitchHandler(true)}
                  style={{ ...styles.button, ...{ alignSelf: "center" } }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      alignSelf: "center",
                      color: "white",
                    }}
                  >
                    START
                  </Text>
                </Pressable>
              </>
            ) : (
              <Text style={{ fontSize: 32, alignSelf: "center" }}></Text>
            )}

            <Input
              style={{ width: 140, textAlign: "center" }}
              placeholder="Select a number"
              onChangeText={handleChange}
              value={number.toString()}
              keyboardType="number-pad"
              blurOnSubmit
              maxLength={2}
            />

            <ButtonContainer>
              <Pressable onPress={handleReset} style={styles.button}>
                <Text style={styles.buttonText}>RESET</Text>
              </Pressable>
              <Pressable onPress={handleConfirm} style={styles.button}>
                <Text style={styles.buttonText}>CONFIRM</Text>
              </Pressable>
            </ButtonContainer>
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
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
    minHeight: 300,
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
