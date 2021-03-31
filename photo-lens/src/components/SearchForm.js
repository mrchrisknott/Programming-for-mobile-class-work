import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchForm({ setSearchQuery }) {
  const [text, setText] = useState();

  const submitHandler = () => {
    Keyboard.dismiss();
    setSearchQuery(text);
}


  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View style={styles.searchForm}>
      <TextInput
        style={styles.input}
        placeholder="Search photos..."
        onChangeText={changeHandler}
      />
      <TouchableOpacity style={styles.searchButton} onPress={() => submitHandler()}>
        <Feather style={styles.icon} name="search" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchForm: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    backgroundColor: "#FFF",
  },
  input: {
    flexGrow: 1,
    color: "#000",
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  searchButton: {
    width: 40,
    height: 40,
    padding: 2,
    backgroundColor: "#000",
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    lineHeight: 32,
  },
});
