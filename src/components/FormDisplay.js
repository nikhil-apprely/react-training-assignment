import React from "react-native";
import { View, Text } from "react-native";

export default function FormDisplay(props) {
  return (
    <View>
      <Text>
        Please check the console for the data passed from the Previous Screen
        {console.log(props)}
      </Text>
    </View>
  );
}
