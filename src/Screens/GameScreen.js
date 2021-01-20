import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import NumberContainer from "../Components/NumberContainer";
import Card from "../Components/Card";

const getRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const ranNum = Math.floor(Math.random() * (max - min) + min);

  if (ranNum === exclude) {
    return getRandomNumber(min, max, exclude);
  } else return ranNum;
};
const GameScreen = ({ myNum }) => {
  let minimum = 1;
  let maximum = 100;
  const [computerGuess, setComputerGuess] = useState(
    getRandomNumber(minimum, maximum, myNum)
  );
  const [win, setWin] = useState(false);

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
    <Card style={styles.container}>
      <Pressable onPress={() => CompGuessHandler(minimum, maximum, myNum)}>
        <Text>The computer's guess: </Text>
        <NumberContainer>{computerGuess}</NumberContainer>
        {win ? <Text>Game over, computer guessed your number</Text> : null}
      </Pressable>
    </Card>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    width: 300,
    maxWidth: "90%",
    borderRadius: 8,
    minHeight: 300,
  },
});
