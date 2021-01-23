import { StyleSheet, View, Text } from "react-native";
import Colors from "./Colors";

export default StyleSheet.create({
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
