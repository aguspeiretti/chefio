import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

const ImageComponent = ({ imageUrl }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode="cover"
      />
    </View>
  );
};

const Card = ({ data }) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View>
      <View key={data.title} style={styles.card}>
        <ImageComponent imageUrl={data.imagen} />
        <View style={styles.content}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>{data.nombre}</Text>
            <Icon.Heart
              height="25"
              width="25"
              stroke={isFavorite ? "#FF914D" : "#2d2c2c"} // Cambia el color del corazón según el estado
              onPress={() => setIsFavorite(!isFavorite)} // Agregue un controlador onPress para alternar el estado del corazón
            />
          </View>

          <View style={styles.caract}>
            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Icon.Clock height="20" width="20" stroke="#2d2c2c" />
                <Text style={styles.text}>
                  Tiempo: {data.tiempoPreparacion}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Icon.PieChart height="20" width="20" stroke="#2d2c2c" />
                <Text style={styles.text}>Porciones: {data.porciones}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.text}>Dificultad:</Text>
                <Text style={styles.text}>{data.dificultad}</Text>
              </View>
            </View>
            <View style={styles.rightDiv}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RecipeDetail", { id: data.id });
                }}
              >
                <Text style={styles.btnCard}>Ver receta</Text>
              </TouchableOpacity>
              <Text style={styles.autor}>by: {data.autor}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  caract: {
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    justifyContent: "start",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#e1e1e1",
    height: 150,
    marginTop: 15,
    borderRadius: 8,
    overflow: "hidden", // Asegura que el borde redondeado se aplique correctamente
  },
  imageContainer: {
    width: "35%",
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    padding: 10,
    width: "65%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#2d2c2c",
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
    color: "#2d2c2c",
    marginLeft: 5,
  },
  rightDiv: {
    alignItems: "center",
    marginLeft: 20,
    justifyContent: "space-evenly",
  },
  btnCard: {
    fontSize: 16,
    marginBottom: 4,
    color: "#2d2c2c",
    marginLeft: 5,

    borderRadius: 30,
    padding: 3,
    paddingVertical: 5,
    paddingHorizontal: 7.5,
    backgroundColor: "#FF914D",
    color: "#fff",
  },
  autor: {
    fontSize: 12,
  },
});
