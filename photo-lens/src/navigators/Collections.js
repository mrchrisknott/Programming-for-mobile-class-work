import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import CollectionsScreen from '../screens/Collections';

export default function CollectionsNavigator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator style={styles.CollectionsScreen}>
            <Stack.Screen name=" Collections" component={CollectionsScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    CollectionsNavigator: {
        /* Styles here */
    },
});
