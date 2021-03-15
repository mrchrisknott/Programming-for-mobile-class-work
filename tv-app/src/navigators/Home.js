import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';

export default function HomeNavigator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator style={styles.HomeNavigator}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'T V M A Z E' }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    HomeNavigator: {
        /* Styles here */
    },
});
