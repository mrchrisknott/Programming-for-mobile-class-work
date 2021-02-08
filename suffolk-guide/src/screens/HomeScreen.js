import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions
} from "react-native";

const HomeScreen = ({ navigation }) => {
  // The following is used by FlatList
  const suffolkAreas = [
    // [ is an array
    {
      key: "1",
      name: "Bury St Edmunds",
    },
    {
      key: "2",
      name: "Ipswich",
    },
    {
      key: "3",
      name: "Haverhill",
    },
    {
      key: "4",
      name: "Felixstowe",
    },
    {
      key: "5",
      name: "Lowestoft",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={suffolkAreas}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem}  onPress={() => navigation.navigate(item.name)}>
            <View>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1abc9c",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 20,
    marginTop: 10,
    padding: 10
  },
});

export default HomeScreen;
