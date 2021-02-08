import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FelixstoweScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is the Felixstowe Screen</Text>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
  
export default FelixstoweScreen;
