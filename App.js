import { StatusBar } from "expo-status-bar";
import * as React from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/components/Home";
import TextScreen from "./src/components/TextScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormScreen from "./src/components/FormScreen";
import FormDisplay from "./src/components/FormDisplay";
import TabularScreen from "./src/components/TabularScreen";
import FlatListScreen from "./src/components/FlatListScreen";
import ScreenAPI from "./src/components/ScreenAPI";
import SportsAPI from "./src/components/SportsAPI";
import LeaguesAPI from "./src/components/LeaguesAPI";
import CounterScreen from "./CounterScreen";
import { Provider } from "react-redux";

import store from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="TextScreen" component={TextScreen} />
            <Stack.Screen name="FormScreen" component={FormScreen} />
            <Stack.Screen name="FormDisplay" component={FormDisplay} />
            <Stack.Screen name="TabularScreen" component={TabularScreen} />
            <Stack.Screen name="FlatListScreen" component={FlatListScreen} />
            <Stack.Screen name="ScreenAPI" component={ScreenAPI} />
            <Stack.Screen name="SportsAPI" component={SportsAPI} />
            <Stack.Screen name="LeaguesAPI" component={LeaguesAPI} />
            <Stack.Screen name="CounterScreen" component={CounterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
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
});
