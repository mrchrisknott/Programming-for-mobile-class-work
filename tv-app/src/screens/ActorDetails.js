import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
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

  const checkImagePresent = (actorData) => {
    if (actorData.image) {
      console.log("XXXX");
      return (
        <Image
          style={styles.photoImage}
          source={{ uri: actorData.image.original }}
        />
      );
    } else {
      console.log("ZZZZ");
      return (
        <Image
          style={styles.photoImage}
          source={{
            uri:
              "https://www.feed-my-people.org/documents/2208634/0/Board+Profile+Photo.png/1e622921-d778-48f4-3f87-0938251f988f?t=1590764519338",
          }}
        />
      );
    }
  };

  return (
    <View style={styles.ActorDetailsScreen}>
      {actorData ? (
        <View style={styles.detailsContainer}>
          {checkImagePresent(actorData)}

          <View style={styles.metaDataContainer}>
            <Text style={styles.metaDataText}>
              <Text style={{ fontWeight: "bold" }}>Actor's name:</Text>{" "}
              {actorData.name}
            </Text>
            <Text style={styles.metaDataText}>
              <Text style={{ fontWeight: "bold" }}>Gender:</Text>{" "}
              {actorData.gender}
            </Text>
            <Text style={styles.metaDataText}>
              <Text style={{ fontWeight: "bold" }}>Birthday:</Text>{" "}
              {actorData.birthday}
            </Text>
            <Text style={styles.metaDataText}>
              <Text style={{ fontWeight: "bold" }}>Deathday:</Text>{" "}
              {actorData.deathday}
            </Text>
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
  ActorDetailsScreen: {
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
