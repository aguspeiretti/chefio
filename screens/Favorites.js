import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import fondo from "../assets/fondo2.png";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import RecipeViewer from "../components/RecipeViewer";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import data from "../MockFav";

const Favorites = () => {
  return (
    <ImageBackground source={fondo} resizeMode={"cover"} style={styles.image}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <View style={styles.favContainer}>
          <Header title={"Mis Favoritos"} />
          <RecipeViewer data={data} />
          <NavBar />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  favContainer: {
    paddingHorizontal: 20,
    height: "100%",
  },
  image: {
    flex: 1,
  },
});
