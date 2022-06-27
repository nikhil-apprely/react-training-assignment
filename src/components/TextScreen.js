import { View, Text } from "react-native";
import InputText from "./InputText";
import ViewerText from "./ViewerText";
import { useEffect, useState } from "react";

export default function TextScreen() {
  const [text, setText] = useState("");

  return (
    <View>
      <InputText setText={setText} />
      <ViewerText text={text} />
    </View>
  );
}
