import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { Feather } from "@expo/vector-icons";

export default function SearchForm({setSearchQuery}) {
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
        placeholder="Enter program's name here..."
        onChangeText={changeHandler}
      />
      <TouchableOpacity style={styles.searchButton} onPress={() => submitHandler()}>
        <Feather style={styles.icon} name="search" size={36} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    searchForm: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#FFF'
    },
    input: {
        flexGrow: 1,
        color: '#000',
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 20
    },
    searchButton: {
        width: 50,
        height: 50,
        padding: 7,
        backgroundColor: '#000',
    },
    icon: {
        flex: 1,
        justifyContent:'center',
        alignSelf:'center',
        lineHeight: 36, 
    }
});