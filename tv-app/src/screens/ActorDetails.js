import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { global } from "../config/global"; //////
export default function ActorDetailsScreen({ route, navigation }) {
  const [actorData, setActorData] = useState(); ///////

  const { photoId } = route.params;
  console.log("show details for photo: " + photoId);
  const getActorData = () => {
    fetch("http://api.tvmaze.com/people/" + photoId)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setActorData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getActorData();
  }, [photoId]);

  return (
    <View style={styles.ActorDetailsScreen}>
      {actorData ? (
        <View style={styles.detailsContainer}>
          <Text>{actorData.name}</Text>
          <Text>{actorData.birthday}</Text>
          <Text>{actorData.deathday}</Text>
          <Text>{actorData.gender}</Text>
          <Text>{actorData.image.original}</Text>
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
  ActorDetailsScreen: {
    /* styles here */
  },

  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },
});
