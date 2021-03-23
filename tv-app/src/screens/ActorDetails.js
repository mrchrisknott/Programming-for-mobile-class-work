import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ActorDetailsScreen({ route, navigation }) {
  const { photoId } = route.params;
  console.log("show details for photo: " + photoId);

  return (
    <View style={styles.ActorDetailsScreen}>
      <Text>ActorDetails screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ActorDetailsScreen: {
    /* styles here */
  },
});
