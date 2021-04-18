import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  ScrollView,
  Linking,
} from "react-native";
export default function ProgDetailsScreen({ route, navigation }) {
  const [progData, setProgData] = useState();

  const { photoId } = route.params;
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
      return (
        <Image
          style={styles.photoImage}
          source={{ uri: progData.image.original }}
        />
      );
    } else {
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

  const checkImdbPresent = (progData) => {
    if (progData.externals.imdb) {
      return (
        <Text style={styles.metaDataText}>
          <Text style={{ fontWeight: "bold" }}>Go to IMDb:</Text>{" "}
          <Text
            style={styles.underline}
            onPress={() => {
              const x = "https://www.imdb.com/title/" + progData.externals.imdb;
              Linking.openURL(x);
            }}
          >
            click here
          </Text>
        </Text>
      );
    } else {
      return (
        <Text style={styles.metaDataText}>
          <Text style={{ fontWeight: "bold" }}>Go to IMDb:</Text>{" "}
          {"Not available"}
        </Text>
      );
    }
  };

  const cleanUpText = (progData) => {
    if (progData.summary) {
      const newSum = progData.summary.replace(/(<([^>]+)>)/gi, "");
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
      );
    }
  };

  return (
    <ScrollView style={styles.ProgDetailsScreen}>
      {progData ? (
        <View style={styles.detailsContainer}>
          {checkImagePresent(progData)}

          <View style={styles.metaDataContainer}>
            <Text style={styles.metaDataText}>
              <Text style={{ fontWeight: "bold" }}>Name of programme:</Text>{" "}
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

            {checkImdbPresent(progData)}

            {cleanUpText(progData)}
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
  ProgDetailsScreen: {
    backgroundColor: "pink",
  },

  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },

  photoImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    borderColor: "deeppink",
    borderWidth: 3,
  },

  metaDataContainer: {
    margin: 20,
  },

  metaDataText: {
    fontSize: 17,
    margin: 7,
  },

  underline: {
    textDecorationLine: 'underline',
  },

});
