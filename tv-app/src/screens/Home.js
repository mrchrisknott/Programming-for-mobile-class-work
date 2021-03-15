import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.HomeScreen}>
      <TouchableOpacity onPress={() => navigation.navigate("Progs")}>
        <Text>Search TV Programs</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Actors")}>
        <Text>Search TV Actors</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {
    padding: 20
  },
});
