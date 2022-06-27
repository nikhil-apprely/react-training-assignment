import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react-native";
import { useState } from "react";

export default function InputText({ setText }) {
  const [text, onChangeText] = useState("Please type here!");
  return (
    <View>
      <Text> Component Name: </Text>
      <Text style={{ fontWeight: "bold" }}> InputText </Text>
      <TextInput
        style={styles.input}
        onChange={(e) => setText(e.target.value)}
        placeholder="Please Type here!"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
});
