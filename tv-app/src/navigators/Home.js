import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import { Feather } from "@expo/vector-icons";
export default function HomeNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator style={styles.HomeNavigator}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({ 
            title: 'T V M A Z E', 
            headerLeft: (props) => {
                return <Feather style={styles.headerMenuButton} name="menu" size={24} color="black" onPress={() => navigation.toggleDrawer() } />
            }
        })}
        
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  HomeNavigator: {
    /* Styles here */
  },
  headerMenuButton: {
    marginLeft: 20
}

});
