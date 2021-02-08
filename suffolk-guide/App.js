import React from "react";
import { StyleSheet, Text, View} from "react-native";                              
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";                     
import HomeScreen from './src/screens/HomeScreen';
import BuryStEdmundsScreen from './src/screens/BuryStEdmundsScreen';
import FelixstoweScreen from './src/screens/FelixstoweScreen';
import HaverhillScreen from './src/screens/HaverhillScreen';
import IpswichScreen from './src/screens/IpswichScreen';
import LowestoftScreen from './src/screens/LowestoftScreen';


export default function App() {
  const Stack = createStackNavigator();                                               
  return (
    <NavigationContainer initialRouteName="Home">                                                             
      <Stack.Navigator>                                                                 
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Choose an area of Suffolk:'}} />
        <Stack.Screen name="Bury St Edmunds" component={BuryStEdmundsScreen} />
        <Stack.Screen name="Felixstowe" component={FelixstoweScreen} />
        <Stack.Screen name="Haverhill" component={HaverhillScreen} />
        <Stack.Screen name="Ipswich" component={IpswichScreen} />
        <Stack.Screen name="Lowestoft" component={LowestoftScreen} />
      </Stack.Navigator>                                                              
    </NavigationContainer>                                                            
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
