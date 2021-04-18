import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.HomeScreen}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="television-classic"
          size={200}
          color="black"
        />
      </View>

      <View>
        <Text style={styles.paragraph1}>
          Use this app to search for your favourite TV programmes and TV actors.
        </Text>
        <Text style={styles.paragraph2}>
          Try clicking on the images to get more information about the programme
          or actor.
        </Text>
      </View>
      <View>
        <Text style={styles.title}></Text>
        <Button
          title="Programme Search"
          onPress={() => navigation.navigate("Progs")}
          color="mediumvioletred"
        />
      </View>
      <View>
        <Text style={styles.title}></Text>

        <Button
          title="Actor Search"
          onPress={() => navigation.navigate("Actors")}
          color="darkslateblue"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    padding: 20,
    backgroundColor: "lightgoldenrodyellow",
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  paragraph1: {
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "100",
  },

  paragraph2: {
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },

  title: {
    padding: 5,
  },
});
