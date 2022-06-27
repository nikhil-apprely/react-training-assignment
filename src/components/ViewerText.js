import { View, Text, StyleSheet } from "react-native";

export default function ViewerText({ text }) {
  return (
    <View>
      <Text> Component: </Text>
      <Text style={{ fontWeight: "bold" }}> ViewerText</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    minHeight: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
});
