import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddTask({addTask}) {
  const [text, setText] = useState();
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View style={styles.addTask}>
      <TextInput
        style={styles.input}
        onChangeText={changeHandler}
        placeholder="Enter task..."
      />
      <Button onPress={() => addTask(text)} title="Add task" />
    </View>
  );
}

const styles = StyleSheet.create({
  addTask: {
    padding: 25,
  },
  input: {
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
});
