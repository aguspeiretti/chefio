import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import fondo from "../assets/fondo2.png";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import RecipeViewer from "../components/RecipeViewer";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import data from "../Mock";

export default function HomeScreen() {
  return (
    <ImageBackground source={fondo} resizeMode={"cover"} style={styles.image}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <View style={styles.homeContainer}>
          <Header title={"Mis Recetas"} />
          <RecipeViewer data={data} />
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