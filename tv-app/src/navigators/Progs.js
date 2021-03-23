import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProgsScreen from "../screens/Progs";
import ProgDetailsScreen from "../screens/ProgDetails";

export default function ProgsNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator style={styles.ProgsNavigator}>
      <Stack.Screen name="Programs" component={ProgsScreen} />
      <Stack.Screen name="Program Details" component={ProgDetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  ProgsNavigator: {
    /* Styles here */
  },
});
