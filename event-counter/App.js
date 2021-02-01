import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  
  const decreaseCount= () => {
    if(count > 0) {
      setCount(count - 1);
    }else{
      Alert.alert("Error", "You cannot have less than 0 attendees!");
    }
    console.log(count);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <Button onPress={increaseCount} title="Add one attendee" />
      <Button onPress={decreaseCount} title="Remove one attendee" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    marginBottom: 30,
    fontSize: 50,
  },
});
