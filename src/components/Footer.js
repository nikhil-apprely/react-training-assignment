import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text>This is a Footer component !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginBottom: "10%",
    borderWidth: "2px",
    borderColor: "#000",
  },
});
