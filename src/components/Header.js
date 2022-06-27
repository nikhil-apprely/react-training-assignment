import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>This is a Header component !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: "10%",
    borderWidth: "2px",
    borderColor: "#000",
  },
});
