import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { useNavigation } from "@react-navigation/native";

export default function TabularScreen() {
  const navigator = useNavigation();
  const UserData = {
    tableHead: ["Col 1", "Col 2", "Col 3", "Col 4"],
    tableData: [
      ["1", "2", "3", "4"],
      ["a", "b", "c", "d"],
      ["1", "2", "3", "456\n789"],
      ["a", "b", "c", "d"],
    ],
  };

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={UserData.tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={UserData.tableData} textStyle={styles.text} />
      </Table>

      <View style={styles.buttonFlex}>
        <Button
          style={styles.buttonStyle}
          onPress={() => navigator.navigate("FlatListScreen")}
          title="List"
          color="#000"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  buttonStyle: {
    padding: "50px",
  },
  buttonFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingTop: "20px",
  },
});
