import React, { useState, useEffect } from "react";
import SearchProgsForm from "../components/SearchProgsForm";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ProgsScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("girls");
  const [progs, setProgs] = useState();
  const searchProgs = () => {
    console.log(
      "Make a call to the API using the search query: " + searchQuery
    );
    fetch("http://api.tvmaze.com/search/shows?q=" + "?=" + searchQuery)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProgs(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const EmptyListMessage = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.emptyListStyle} onPress={() => getItem(item)}>
        Sorry, no programmes were found with that name!
      </Text>
    );
  };

  useEffect(() => {
    searchProgs();
  }, [searchQuery]);

  const checkImagePresent = (item) => {
    if (item.show.image) {
      return (
        <TouchableOpacity
          style={styles.resultImageTouchable}
          onPress={() => {
            navigation.navigate("Programme Details", {
              photoId: item.show.id,
            });
          }}
        >
          <Image
            source={{ uri: item.show.image.original }}
            style={styles.resultImage}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.resultImageTouchable}
          onPress={() => {
            navigation.navigate("Programme Details", {
              photoId: item.show.id,
            });
          }}
        >
          <Image
            source={{
              uri:
                "https://d3iso9mq9tb10q.cloudfront.net/wysiwyg/default-placeholder.png",
            }}
            style={styles.resultImage}
          />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.ProgsScreen}>
      <SearchProgsForm setSearchQuery={setSearchQuery} />
      {progs ? (
        <View style={styles.resultsContainer}>
          <FlatList
            numColumns="1"
            style={{ margin: 10, marginBottom: 100 }}
            keyExtractor={(item, index) => item.show.id.toString()}
            data={progs}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.baseText}>{item.show.name}</Text>
                {checkImagePresent(item)}
              </View>
            )}
            ListEmptyComponent={EmptyListMessage}
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
  ProgsScreen: {
    backgroundColor: "pink",
    flex: 1,
  },

  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },

  resultImage: {
    flex: 1,
    width: 250,
    height: 200,
    resizeMode: "cover",
    borderColor: "deeppink",
    borderWidth: 3,
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
  },

  emptyListStyle: {
    fontWeight: "bold",
    marginTop: 100,
    marginBottom: 300,
    marginLeft: 10,
    fontSize: 20,
  },

  baseText: {
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
  },
});
