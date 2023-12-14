import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as Icon from "react-native-feather";

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (text) => {
    // Llama a la función de búsqueda pasando el texto actual
    onSearch(text);
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.interior}>
        <TouchableOpacity>
          <Icon.Search height="25" width="25" stroke="gray" />
        </TouchableOpacity>
        <TextInput
          onChangeText={handleSearch}
          placeholder="Recetas..."
          style={styles.textInput}
        />
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
