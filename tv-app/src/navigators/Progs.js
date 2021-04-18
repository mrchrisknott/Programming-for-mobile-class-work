import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProgsScreen from "../screens/Progs";
import ProgDetailsScreen from "../screens/ProgDetails";
import { Feather } from "@expo/vector-icons";

export default function ProgsNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator style={styles.ProgsNavigator}>
      <Stack.Screen
        name="Programme Search"
        component={ProgsScreen}
        options={({ navigation }) => ({
          headerLeft: (props) => {
            return (
              <Feather
                style={styles.headerMenuButton}
                name="menu"
                size={24}
                color="black"
                onPress={() => navigation.toggleDrawer()}
              />
            );
          },
        })}
      />
      <Stack.Screen name="Programme Details" component={ProgDetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  ProgsNavigator: {
    /* Styles here */
  },
  headerMenuButton: {
    marginLeft: 20,
  },
});
