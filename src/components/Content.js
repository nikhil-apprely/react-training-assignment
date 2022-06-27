import { View, Text, StyleSheet } from "react-native";

export default function Content() {
  return (
    <View style={styles.content}>
      <Text>This is a Content component !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: "2px",
    borderColor: "#000",
  },
});
