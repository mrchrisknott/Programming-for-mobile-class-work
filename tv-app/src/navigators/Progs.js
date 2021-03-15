import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import ProgsScreen from '../screens/Progs';

export default function ProgsNavigator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator style={styles.ProgsNavigator}>
            <Stack.Screen name="Progs" component={ProgsScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    ProgsNavigator: {
        /* Styles here */
    },
});
