import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Todo from "./src/Todo";

export default class App extends React.Component {
  render() {
    return <Todo />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
