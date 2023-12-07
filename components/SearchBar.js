import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.interior}>
        <Icon.Search height="25" width="25" stroke="gray" />
        <TextInput placeholder="Recetas..." style={styles.textInput} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  interior: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 6,
    borderRadius: 50,
    borderColor: "gray",
    borderWidth: 1,
  },
  textInput: {
    marginLeft: 2,
    width: "80%",
  },
});
