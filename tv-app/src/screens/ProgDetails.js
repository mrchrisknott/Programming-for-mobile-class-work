import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import { global } from "../config/global";
export default function ProgDetailsScreen({ route, navigation }) {
  const [progData, setProgData] = useState();

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

  const checkImagePresent = (progData) => {
    if (progData.image) {
      console.log("XXXX");
      return (
        <Image
          style={styles.photoImage}
          source={{ uri: progData.image.original }}
        />
      );
    } else {
      console.log("ZZZZ");
      return (
        <Image
          style={styles.photoImage}
          source={{
            uri:
              "https://d3iso9mq9tb10q.cloudfront.net/wysiwyg/default-placeholder.png",
          }}
        />
      );
    }
  };

  const cleanUpText = (progData) => {
    if (progData.summary) {
      console.log("aaaa");
      console.log({ progData });
      console.log("bbbb");

      const newSum = progData.summary.replace(/(<([^>]+)>)/gi, "");
      console.log(newSum);
      return (
        <Text style={styles.metaDataText}>
          <Text style={{ fontWeight: "bold" }}>Summary:</Text> {newSum}
        </Text>
      );
    } else {
        return (
            <Text style={styles.metaDataText}>
              <Text style={{ fontWeight: "bold" }}>Summary: </Text> No data
            </Text>  
        )}
  };

  return (
    <View style={styles.ProgDetailsScreen}>
      {progData ? (
        <View style={styles.detailsContainer}>
          {checkImagePresent(progData)}

          <View style={styles.metaDataContainer}>
            <Text style={styles.metaDataText}>
              <Text style={{ fontWeight: "bold" }}>Programs name:</Text>{" "}
              {progData.name}
            </Text>
            <Text style={styles.metaDataText}>
              <Text style={{ fontWeight: "bold" }}>Language:</Text>{" "}
              {progData.language}
            </Text>
            <Text style={styles.metaDataText}>
              <Text style={{ fontWeight: "bold" }}>Premiered:</Text>{" "}
              {progData.premiered}
            </Text>
            {cleanUpText(progData)}
          </View>
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

  resultImage: {
    flex: 1,
    margin: 20,
    width: 250,
    height: 350,
    justifyContent: "center",
  },

  photoImage: {
    width: 360,
    height: 300,
    resizeMode: "cover",
  },
  metaDataContainer: {
    margin: 20,
  },
  metaDataText: {
    fontSize: 17,
  },
});
