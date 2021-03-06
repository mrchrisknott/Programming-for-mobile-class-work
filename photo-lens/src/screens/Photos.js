import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { global } from "../config/global";

export default function PhotosScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("Beach");
  const [photos, setPhotos] = useState();  // //////////////////////////Is this positioned correctly???????? penultimate step from activity 20

  const searchPhotos = () => {
    console.log(
      "Make a call to the API using the search query: " + searchQuery
    );
    fetch(
      "https://api.unsplash.com/search/photos?client_id=" +
        global.unsplashAccessKey +
        "&query=" +
        searchQuery
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPhotos(json["results"]);   // //////////////////////////Is this positioned correctly???????? last step activity 20
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    searchPhotos();
  }, [searchQuery]);

  return (
    <View style={styles.PhotosScreen}>
      <Text>Photos screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  PhotosScreen: {
    /* styles here */
  },
});
