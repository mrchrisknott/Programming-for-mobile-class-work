import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import ActorsScreen from '../screens/Actors';

export default function ActorsNavigator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator style={styles.ActorsNavigator}>
            <Stack.Screen name="Actors" component={ActorsScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    ActorsNavigator: {
        /* Styles here */
    },
});
