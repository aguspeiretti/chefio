import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Profile />
      <View style={{ marginLeft: 15, justifyContent: "center" }}>
        <Text style={styles.header}>{title}</Text>
        <SearchBar />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    marginBottom: 10,
  },
});
