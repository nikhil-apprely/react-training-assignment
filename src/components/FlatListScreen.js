import React from "react-native";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Fourth Item",
  },
];

export default function FlatListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => item.title}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-evenly",
    height: "auto",
    borderColor: "black",
    borderWidth: 2,
  },
});
