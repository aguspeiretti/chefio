import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

export default function NavBar() {
  const navigation = useNavigation();
  const [activeIcon, setActiveIcon] = useState("Home");

  return (
    <View style={styles.container}>
      <Icon.Home
        onPress={() => {
          navigation.navigate("Home");
        }}
        width="28"
        height="28"
        stroke={"#000"}
      />
      <Icon.Heart
        onPress={() => {
          navigation.navigate("Favorites");
        }}
        width="28"
        height="28"
        stroke={"#000"}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("AddRecipe")}
        style={styles.buttonAdd}
      >
        <Text style={styles.buttonInside}>+</Text>
      </TouchableOpacity>
      <Icon.Users width="28" height="28" stroke="#000" />
      <Icon.BookOpen width="28" height="28" stroke="#000" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    backgroundColor: "#e5e5e5",
    borderRadius: 30,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 15,
    left: 20,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonAdd: {
    height: 110,
    width: 110,
    backgroundColor: "#fff",
    borderRadius: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonInside: {
    height: 90,
    width: 90,
    backgroundColor: "#FF914D",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    lineHeight: 80,
    color: "#fff",
    fontWeight: "500",
    fontSize: 30,
  },
});
