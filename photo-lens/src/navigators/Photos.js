import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PhotoDetailsScreen from '../screens/PhotoDetails';

import { createStackNavigator } from '@react-navigation/stack';

import PhotosScreen from '../screens/Photos';

export default function PhotosNavigator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator style={styles.PhotosNavigator}>
            <Stack.Screen name="Photos" component={PhotosScreen} />
            <Stack.Screen name="Photo Details" component={PhotoDetailsScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    PhotosNavigator: {
        /* Styles here */
    },
});
