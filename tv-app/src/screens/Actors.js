import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import { global } from "../config/global";

export default function ActorsScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("Smith");
  const [actors, setActors] = useState();
  

  const searchActors = () => {
    console.log(
      "Make a call to the API using the search query: " + searchQuery
    );
    fetch("http://api.tvmaze.com/search/people?q=" + searchQuery)
      .then((response) => response.json())
      .then((json) => {

        console.log(json);              
        setActors(json["results"]);     // results is UNDEFINED !!!!!!
        console.log("CJK-START");       
        console.log(json["results"]);   
        console.log("CJK-ENDSTART");    



      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    searchActors();
  }, [searchQuery]);

  return (
    <View style={styles.ActorsScreen}>
      {actors ? (
        <View style={styles.resultsContainer}>
          <FlatList
            data={actors}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ActorsScreen: {
    /* styles here */
  },
  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },
});
