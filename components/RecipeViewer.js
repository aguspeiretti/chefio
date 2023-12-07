import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import Card from "./card";

export default function RecipeViewer({ data }) {
  return (
    <View style={styles.sizer}>
      <ScrollView contentContainerStyle={styles.container}>
        {data.map((dato, index) => (
          <Card key={dato.id} data={dato} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sizer: { height: "75%", marginTop: 20 },
  container: {
    backgroundColor: "#d6661138",
    flexGrow: 1,
    borderRadius: 10,

    paddingHorizontal: 15,
  },
});
