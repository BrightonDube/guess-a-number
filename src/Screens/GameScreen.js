import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
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
  let minimum = 1;
  let maximum = 100;
  const [computerGuess, setComputerGuess] = useState(
    getRandomNumber(minimum, maximum, myNum)
  );
  const [win, setWin] = useState(true);

  const resultHandler = () => {
    if (computerGuess === myNum) {
      setWin(true);
    }
  };
  const CompGuessHandler = (min, max, exclude) => {
    setComputerGuess(getRandomNumber(min, max, exclude));
    resultHandler();
  };
  return (
    <View>
      <Card style={styles.card}>
        <Text style={{ fontSize: 24, alignSelf: "center" }}>
          The computer's guess:{" "}
        </Text>
        <NumberContainer>{computerGuess}</NumberContainer>
        <ButtonContainer>
          <Pressable
            style={styles.button}
            onPress={() => CompGuessHandler(minimum, maximum, myNum)}
          >
            <Text style={styles.buttonText}>Lower</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => CompGuessHandler(minimum, maximum, myNum)}
          >
            <Text style={styles.buttonText}>Higher</Text>
          </Pressable>
        </ButtonContainer>
        {win ? (
          <View>
            <Text style={{ alignSelf: "center" }}>
              Game over, computer guessed your number {myNum}
            </Text>
            <Pressable style={styles.button} onPress={() => screen(false)}>
              <Text style={styles.buttonText}>Play Again</Text>
            </Pressable>
          </View>
        ) : null}
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
