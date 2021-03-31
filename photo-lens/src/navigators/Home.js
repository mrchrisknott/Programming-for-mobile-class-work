import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import HomeScreen from '../screens/Home';


export default function HomeNavigator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator style={styles.HomeNavigator}>
            <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({ 
    title: 'Photo Lens', 
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
