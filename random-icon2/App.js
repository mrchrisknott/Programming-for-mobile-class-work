import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  const [icon, setIcon] = useState("fort-awesome"); // creates new variable icon + a function called setIcon
  const possibleIcons = [
    "biking",
    "bitcoin",
    "book-open",
    "box",
    "ambulance",
    "birthday-cake",
  ];
  // why did it stop working when I introduced do / while code? Why did newIcon go pale as if not referenced?
  const changeIcon = () => {
    let found = false;
    while (found == false) {
      let newIcon =
        possibleIcons[Math.floor(Math.random() * possibleIcons.length)];
      if (icon != newIcon) {
        setIcon(newIcon);
        found = true;
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={changeIcon}>
        <FontAwesome5 name={icon} size={200} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
