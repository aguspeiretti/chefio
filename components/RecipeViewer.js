import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import Card from "./card";

export default function RecipeViewer({ data }) {
  const [search, setSearch] = useState("");

  const productFiltred = data.filter((recip) =>
    recip.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.sizer}>
      <ScrollView contentContainerStyle={styles.container}>
        {productFiltred
          ? productFiltred.map((dato, index) => (
              <Card key={dato.slug} data={dato} />
            ))
          : data.map((dato, index) => <Card key={dato.slug} data={dato} />)}
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
