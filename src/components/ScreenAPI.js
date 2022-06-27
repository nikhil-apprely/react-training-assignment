import React from "react-native";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ScreenAPI() {
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.buttonFlex}>
        <Button
          style={styles.buttonStyle}
          onPress={() => navigator.navigate("SportsAPI")}
          title="Sports"
          color="#000"
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => navigator.navigate("LeaguesAPI")}
          title="Leagues"
          color="#000"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  buttonFlex: {
    display: "flex",
    top: "50%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingBottom: "20px",
  },
  buttonStyle: {
    padding: "50px",
  },
});
