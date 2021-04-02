import React, { useState, useEffect, ActivityIndicator } from "react";
import { StyleSheet, Text, View } from "react-native";
import { global } from "../config/global";
export default function CollectionDetailsScreen({ route, navigation }) {
  const [collectionData, setCollectionData] = useState();
  const { collectionId } = route.params;
  const getCollectionData = () => {
    fetch(
      "https://api.unsplash.com/collections/" +
        collectionId +
        "?client_id=" +
        global.unsplashAccessKey
    )
      .then((response) => response.json())
      .then((json) => {
        setCollectionData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCollectionData();
  }, [collectionId]);

  return (
    <View style={styles.collectionDetailsScreen}>
      {collectionData ? (
        <View style={styles.detailsContainer}>
          <Text>Collection data loaded</Text>
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
  collectionDetailsScreen: {
    /* Styles here */
  },
  
  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },
});
