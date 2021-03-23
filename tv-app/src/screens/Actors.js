import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ActorsScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("Peacock");
  const [actors, setActors] = useState();
  const searchActors = () => {
    console.log(
      "Make a call to the API using the search query: " + searchQuery
    );
    fetch("http://api.tvmaze.com/search/people?q=" + searchQuery)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setActors(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    searchActors();
  }, [searchQuery]);

  const checkImagePresent = (item) => {
    if (item.person.image) {
      return (
        <TouchableOpacity
          style={styles.resultImageTouchable}
          onPress={() => {
            navigation.navigate("Actor Details", {
              photoId: item.person.id,
            });
          }}
        >
          <Image
            source={{ uri: item.person.image.original }}
            style={styles.resultImage}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.resultImageTouchable}
          onPress={() => {
            navigation.navigate("Actor Details", {
              photoId: item.person.id,
            });
          }}
        >
          <Image
            source={{
              uri:
                "https://www.feed-my-people.org/documents/2208634/0/Board+Profile+Photo.png/1e622921-d778-48f4-3f87-0938251f988f?t=1590764519338",
            }}
            style={styles.resultImage}
          />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.ActorsScreen}>
      {actors ? (
        <View style={styles.resultsContainer}>
          <FlatList
            ItemSeparatorComponent={this.FlatListItemSeparator}
            numColumns="1"
            style={{ margin: 10 }}
            keyExtractor={(item, index) => item.person.id.toString()} // this tell React Native where the key is
            data={actors}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.baseText}>{item.person.name}</Text>
                {checkImagePresent(item)}
              </View>
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
  ActorsScreen: {},

  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },

  resultImage: {
    flex: 1,
    margin: 20,
    width: "50%",
    height: 200,
    justifyContent: "center",
  },

  baseText: {
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
  },
});
