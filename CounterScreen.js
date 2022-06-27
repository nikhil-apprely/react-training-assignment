import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { increment } from "./redux/reducer";
import { decrement } from "./redux/reducer";

export default function CounterScreen() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <View style={styles.buttonFlex}>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Decrease</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Increase</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 80,
    fontWeight: "bold",
  },
  buttonFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingBottom: "20px",
  },
});
