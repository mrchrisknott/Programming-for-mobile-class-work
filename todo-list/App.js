import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import Header from "./src/components/Header";
import TodoTask from "./src/components/TodoTask";
export default function App() {
  const [todos, setTodos] = useState([
    { key: "1", task: "Go shopping", done: false },
    { key: "2", task: "Visit friends", done: true },
    { key: "3", task: "Study", done: false },
  ]);

  const toggleDone = (key) => {
    console.log("toggle this task : " + key);
    const objIndex = todos.findIndex((obj => obj.key == key));
    const todosNew = [...todos];
    todosNew[objIndex]['done'] = !todosNew[objIndex]['done'];
    setTodos(todosNew);
  };
  
  
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.list}>
        <FlatList data={todos} renderItem={({ item }) => <TodoTask item={item} toggleDone={toggleDone} />} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    padding: 25,
  },
});
