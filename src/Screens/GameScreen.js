import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";

import NumberContainer from "../Components/NumberContainer";
import ButtonContainer from "../Components/ButtonContainer";
import Card from "../Components/Card";
import Colors from "../Constants/Colors";

const getRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const ranNum = Math.floor(Math.random() * (max - min) + min);

  if (ranNum === exclude) {
    return getRandomNumber(min, max, exclude);
  } else return ranNum;
};

const GameScreen = ({ myNum, screen }) => {
  const minimum = useRef(1);
  const maximum = useRef(100);
  const [win, setWin] = useState(false);
  const [rounds, setRounds] = useState(0);
  const [computerGuess, setComputerGuess] = useState(
    getRandomNumber(minimum.current, maximum.current, myNum)
  );
  useEffect(() => {
    if (computerGuess === myNum) {
      setWin(true);
      return;
    }
  }, [computerGuess]);

  const CompGuessHandler = (min, max, exclude) => {
    setComputerGuess(getRandomNumber(min, max, exclude));
  };
  const handleNextGuess = (direction) => {
    if (
      (direction === "lower" && computerGuess < myNum) ||
      (direction === "higher" && computerGuess > myNum)
    ) {
      Alert.alert(
        "Wrong hint",
        "Please give a correct hint, this one is wrong!",
        [{ text: "Sorry!", style: "cancel" }]
      );
      return;
    }
    if (direction === "lower") {
      maximum.current = computerGuess;
      CompGuessHandler(minimum.current, maximum.current, computerGuess);
    } else {
      minimum.current = computerGuess;
      CompGuessHandler(minimum.current, maximum.current, computerGuess);
    }
    setRounds((currounds) => currounds + 1);
  };

  return (
    <View>
      <Card style={styles.card}>
        {win ? (
          <View>
            <Text style={{ alignSelf: "center" }}>
              Game over, computer guessed your number in {rounds} attempts!
            </Text>
            <Pressable style={styles.button} onPress={() => screen(false)}>
              <Text style={styles.buttonText}>Play Again</Text>
            </Pressable>
          </View>
        ) : (
          <View>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "OpenSans-Bold",
                alignSelf: "center",
              }}
            >
              The computer's guess:{" "}
            </Text>
            <NumberContainer>{computerGuess}</NumberContainer>
            <ButtonContainer>
              <Pressable
                style={styles.button}
                onPress={() => handleNextGuess("lower")}
              >
                <Text style={styles.buttonText}>Lower</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleNextGuess("higher")}
              >
                <Text style={styles.buttonText}>Higher</Text>
              </Pressable>
            </ButtonContainer>
          </View>
        )}
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: "90%",
    borderRadius: 8,
    minHeight: 300,
  },
  button: {
    borderRadius: 8,
    backgroundColor: Colors.accent,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
