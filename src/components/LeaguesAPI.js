import React from "react-native";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";

const urlAPI = "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php";

export default function LeaguesAPI() {
  const [info, setInfo] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(urlAPI)
      .then((res) => {
        console.log(res.data.leagues);
        setInfo(res.data.leagues);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        flex: 1,
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={info}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={{ padding: 20 }}>
                  <Text style={{ fontSize: 16 }}>{item.strLeague}</Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
      )}
    </View>
  );
}
