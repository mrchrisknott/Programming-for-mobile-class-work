import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProgDetailsScreen({ route, navigation }) {
  const { photoId } = route.params;
  console.log("show details for photo: " + photoId);

  return (
    <View style={styles.ProgDetailsScreen}>
      <Text>ProgDetails screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ProgDetailsScreen: {
    /* styles here */
  },
});
