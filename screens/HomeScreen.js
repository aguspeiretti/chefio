import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import fondo from "../assets/fondo2.png";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import RecipeViewer from "../components/RecipeViewer";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { UseApiContext } from "../context/Context";

export default function HomeScreen() {
  const apiContext = useContext(UseApiContext);
  const { recipes } = apiContext;
  const [searchText, setSearchText] = useState("");

  const myRecipes = recipes.filter((recipe) => recipe.autor === "aguPeiretti");

  const filteredRecipes = myRecipes.filter((recipe) =>
    recipe.titulo.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ImageBackground source={fondo} resizeMode={"cover"} style={styles.image}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <View style={styles.homeContainer}>
          <Header title={"Mis Recetas"} onSearch={setSearchText} />
          <RecipeViewer data={filteredRecipes} />
          <NavBar />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    paddingHorizontal: 20,
    height: "100%",
  },
  image: {
    flex: 1,
  },
});
