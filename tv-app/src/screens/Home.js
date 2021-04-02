import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

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
          Use this app to search for your favourite TV programs and TV actors.
        </Text>
        <Text style={styles.paragraph2}>
          Try clicking on the images to get more information about the program
          or actor.
        </Text>

        <Button
          style={styles.button}
          title="Search TV Programs"
          onPress={() => navigation.navigate("Progs")}
          color="deeppink"
        />
      </View>
      <View>
        <Text style={styles.title}></Text>

        <Button
          title="Search TV Actors"
          onPress={() => navigation.navigate("Actors")}
          color="darkslateblue"
        />
      </View>

      <View style={styles.container1}>
        <MaterialIcons name="theater-comedy" size={24} color="darkslategrey" />
        <MaterialCommunityIcons
          name="filmstrip"
          size={24}
          color="darkslategrey"
        />
        <MaterialCommunityIcons
          name="newspaper-variant"
          size={24}
          color="darkslategrey"
        />
        <MaterialIcons name="sports-handball" size={24} color="darkslategrey" />
        <MaterialIcons name="person" size={24} color="darkslategrey" />
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
    fontSize: 17,
  },
  paragraph2: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 17,
  },
  button: {
    marginBottom: 50,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "lightgoldenrodyellow",
    color: "red",
    marginTop: 30,
  },
});
