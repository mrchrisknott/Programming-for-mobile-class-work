import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from "react-native";

export default function ProgsScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("News");
  const [progs, setProgs] = useState(); // //////////////////////////Is this positioned correctly???????? penultimate step from activity 20 ??????????

  const searchProgs = () => {
    console.log(
      "Make a call to the API using the search query: " + searchQuery
    );
    fetch("http://api.tvmaze.com/search/shows?q=" + "?=" + searchQuery)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProgs(json["results"]); // //////////////////////////Is this positioned correctly???????? last step activity 20  ?????????????????????
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    searchProgs();
  }, [searchQuery]);

  return (
    <View style={styles.ProgsScreen}>
      {progs ? (
        <View style={styles.resultsContainer}>
          <FlatList
            data={progs}
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
  ProgsScreen: {
    /* styles here */
  },

  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },
});
