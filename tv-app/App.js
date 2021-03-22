import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import ActorDetailsScreen from "./src/screens/ActorDetails";
// import ProgDetailsScreen from "./src/screens/ProgDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from "./src/navigators/Home";

import ProgsNavigator from "./src/navigators/Progs";
import ActorsNavigator from "./src/navigators/Actors";

export default function App() {
  const Drawer = createDrawerNavigator();


  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 4,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{ title: "TV Maze Application" }}
        />
        <Drawer.Screen
          name="Progs"
          component={ProgsNavigator}
          options={{ title: "TV Program Search" }}
        />
        <Drawer.Screen
          name="Actors"
          component={ActorsNavigator}
          options={{ title: "TV Actor Search" }}
        />
      </Drawer.Navigator>
      <StatusBar style="auto" hidden={true} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
