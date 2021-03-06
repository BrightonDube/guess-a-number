import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  ImageBackground,
} from "react-native";

import NumberContainer from "../Components/NumberContainer";
import ButtonContainer from "../Components/ButtonContainer";
import Card from "../Components/Card";
import Styles from "../Constants/Styles";

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
        <ImageBackground
          source={require("../../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        >
          {win ? (
            <View
              style={{
                width: 250,
                height: 300,
                padding: 10,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Text style={styles.centeredText}>
                Game over, computer guessed your number in {rounds} attempts!
              </Text>
              <Pressable
                style={{ ...Styles.button, ...{ alignSelf: "center" } }}
                onPress={() => screen(false)}
              >
                <Text style={Styles.buttonText}>Play Again</Text>
              </Pressable>
            </View>
          ) : (
            <View>
              <Text style={styles.centeredText}>The computer's guess: </Text>
              <NumberContainer>{computerGuess}</NumberContainer>
              <ButtonContainer>
                <Pressable
                  style={Styles.button}
                  onPress={() => handleNextGuess("lower")}
                >
                  <Text style={Styles.buttonText}>Lower</Text>
                </Pressable>
                <Pressable
                  style={Styles.button}
                  onPress={() => handleNextGuess("higher")}
                >
                  <Text style={Styles.buttonText}>Higher</Text>
                </Pressable>
              </ButtonContainer>
            </View>
          )}
        </ImageBackground>
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
    maxHeight: "80%",
    padding: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  centeredText: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});
