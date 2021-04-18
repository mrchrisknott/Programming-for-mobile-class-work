import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Image, ScrollView } from "react-native";
export default function ActorDetailsScreen({ route, navigation }) {
  const [actorData, setActorData] = useState();

  const { photoId } = route.params;
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
      return (
        <Image
          style={styles.photoImage}
          source={{ uri: actorData.image.original }}
        />
      );
    } else {
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

  const deathData = (actorData) => {
    if (actorData.deathday) {
      return (
        <Text style={styles.metaDataText}>
          <Text style={{ fontWeight: "bold" }}>Date of death:</Text>{" "}
          {actorData.deathday}
        </Text>
      );
    }
  };

  return (
    <ScrollView style={styles.ActorDetailsScreen}>
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
              <Text style={{ fontWeight: "bold" }}>Date of birth:</Text>{" "}
              {actorData.birthday}
            </Text>

            {deathData(actorData)}
          </View>
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ActorDetailsScreen: {
    backgroundColor: "thistle",
    flex: 1,
  },

  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },

  photoImage: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
    borderColor: "darkslateblue",
    borderWidth: 3,
  },

  metaDataContainer: {
    margin: 20,
  },

  metaDataText: {
    margin: 15,
    fontSize: 17,
  },
});
