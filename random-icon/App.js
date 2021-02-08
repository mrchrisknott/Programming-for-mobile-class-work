import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";


export default function App() {
  const [icon, setIcon] = useState('fort-awesome');
  const possibleIcons = ['biking', 'bitcoin', 'book-open', 'box', 'ambulance', 'birthday-cake'];
  const changeIcon = () => {
    let newIcon = possibleIcons[Math.floor(Math.random()*possibleIcons.length)];
    if (icon == newIcon) {
      newIcon = 'asterisk';
    }
    setIcon(newIcon);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={changeIcon}>
        <FontAwesome5 name={icon} size={200} color="black" />
      </TouchableOpacity>
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
});
