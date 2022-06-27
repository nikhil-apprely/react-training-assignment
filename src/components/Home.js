import { View, StyleSheet } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <Footer />

      <View style={styles.buttonFlex}>
        <Button
          style={styles.buttonStyle}
          onPress={() => navigator.navigate("TextScreen")}
          title="Text"
          color="#000"
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => navigator.navigate("FormScreen")}
          title="Form"
          color="#000"
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => navigator.navigate("TabularScreen")}
          title="Table"
          color="#000"
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => navigator.navigate("ScreenAPI")}
          title="API"
          color="#000"
        />
        <Button
          style={styles.buttonStyle}
          onPress={() => navigator.navigate("CounterScreen")}
          title="Count"
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingBottom: "20px",
  },
  buttonStyle: {
    padding: "50px",
  },
});
