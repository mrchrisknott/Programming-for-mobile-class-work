import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";

export default function ActorsScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("smith");
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
        <Image
          source={{ uri: item.person.image.original }}
          style={styles.resultImage}
        />
      );
    } else {
      return (
        <Image
          source={{ uri: "https://www.feed-my-people.org/documents/2208634/0/Board+Profile+Photo.png/1e622921-d778-48f4-3f87-0938251f988f?t=1590764519338" }}
          style={styles.resultImage}
        />
      );
    }
  };

  return (
    <View style={styles.ActorsScreen}>
      {actors ? (
        <View style={styles.resultsContainer}>
          <FlatList
            ItemSeparatorComponent = { this.FlatListItemSeparator }
            numColumns="1"
            style={{ margin: 10 }}
            keyExtractor={(item, index) => item.person.id.toString()} // this tell React Native where the key is
            data={actors}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.baseText}>{item.person.name}</Text>
                {checkImagePresent(item)}
              </View>

              //          <Text>
              //            {"Name:        "}
              //            {item.person.name}
              //            {"\n"}
              //            {"Photo URL: "}
              //            {item.person.url}
              //            {"\n"}
              //            {"Photo URL: "}
              //            {item.person.image.original}
              //            {"\n"} // works if all populated - need to work out how to
              //            handle empty one
              //            {"Country:        "}
              //            {item.person.country.name}
              //            {"\n"} // works if all populated - need to work out how to
              //            handle empty one
              //            {"Gender:        "}
              //            {item.person.gender}
              //            {"\n"}
              //            {"Born:            "}
              //            {item.person.birthday}
              //            {"\n"}
              //            {"Died:            "}
              //            {item.person.deathday}
              //            {"\n"}
              //          </Text>

              //      <Image
              //        style={styles.resultImage}
              //        source={{ uri: item.person.image.original }}
              //
              //      />
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
  ActorsScreen: {
  },

  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },

  resultImage: {
    flex: 1,
    margin: 30,
    height: 300,
    justifyContent: "center",
  },

  baseText: {
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
  },

});
