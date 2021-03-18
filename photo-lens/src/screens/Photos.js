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

export default function PhotosScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("Beach");
  const [photos, setPhotos] = useState();

  const searchPhotos = () => {
    console.log(
      "Make a call to the API using the search query: " + searchQuery
    );
    fetch("https://api.unsplash.com/search/photos?client_id=" +
        global.unsplashAccessKey +
        "&query=" +
        searchQuery
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);              // displays
        setPhotos(json["results"]);
        console.log("CJK-START");       // displays
        console.log(json["results"]);   // displays
        console.log("CJK-ENDSTART");    // displays
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
      {photos ? (
        <View style={styles.resultsContainer}>
          <FlatList
            numColumns="2"
            style={{ margin: 10 }}
            data={photos}
            renderItem={({ item }) => (
              <Image
                style={styles.resultImage}
                source={{ uri: item.urls.regular }}
              />
            )}
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
  PhotosScreen: {
    /* styles here */
  },
  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },
  resultImage: {
    flex: 1,
    margin: 10,
    height: 200,
  },
});
