import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { global } from "../config/global"; //////
export default function ProgDetailsScreen({ route, navigation }) {
  const [progData, setProgData] = useState(); ///////
  const { photoId } = route.params;
  console.log("show details for photo: " + photoId);
  const getProgData = () => {
    fetch("http://api.tvmaze.com/shows/" + photoId)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProgData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getProgData();
  }, [photoId]);

  return (
    <View style={styles.ProgDetailsScreen}>
      {progData ? (
        <View style={styles.detailsContainer}>
           <Text>{progData.name}</Text>    
          <Text>{progData.language}</Text>
          <Text>{progData.summary}</Text>
          <Text>{progData.premiered}</Text>
          <Text>{progData.image.original}</Text>   
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
  ProgDetailsScreen: {
    /* styles here */
  },
  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },
});
