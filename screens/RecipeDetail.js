import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  ImageComponent,
  Pressable,
} from "react-native";
import fondo from "../assets/fondo1.png";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../Mock";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

const RecipeDetail = ({ route }) => {
  const id = route.params.id;
  const dataFiltrada = data.filter((item) => item.id == id);
  const navigation = useNavigation();

  return (
    <ImageBackground source={fondo} resizeMode={"cover"} style={styles.image}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <View style={styles.detailContainer}>
          <ScrollView contentContainerStyle={styles.detail}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingRight: 20,
              }}
            >
              <View>
                <Text style={styles.titulo}>{dataFiltrada[0].nombre}</Text>
                <Text style={styles.autorTitle}>@{dataFiltrada[0].autor}</Text>
              </View>

              <Pressable
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Icon.ArrowLeftCircle height="35" width="35" stroke="#2d2c2c" />
              </Pressable>
            </View>

            <View style={styles.imgContainer}>
              <Image
                style={styles.image}
                source={{ uri: dataFiltrada[0].imagen }}
                resizeMode="cover"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginBottom: 20,
              }}
            >
              <View>
                <Text style={styles.secundario}>Porciones</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon.PieChart height="20" width="20" stroke="#2d2c2c" />
                  <Text style={styles.secundario}>
                    : {dataFiltrada[0].porciones}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.secundario}>Dificultad</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon.BarChart height="20" width="20" stroke="#2d2c2c" />
                  <Text style={styles.secundario}>
                    : {dataFiltrada[0].dificultad}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.secundario}>Tiempo</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon.Clock height="20" width="20" stroke="#2d2c2c" />
                  <Text style={styles.secundario}>
                    : {dataFiltrada[0].tiempoPreparacion}
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.secundario}> Ingredientes:</Text>
            <View style={styles.ingredientContainer}>
              {dataFiltrada[0].ingredientes.map((item) => (
                <Text key={item.id} style={styles.ingredientsTags}>
                  {item}
                </Text>
              ))}
            </View>
            <Text style={styles.secundario}> Paso a paso:</Text>
            <Text style={styles.inst}>{dataFiltrada[0].instrucciones}</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({
  detailContainer: {
    paddingHorizontal: 10,
    height: "100%",
  },
  autorTitle: {
    marginBottom: 10,
  },
  titulo: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 10,
  },
  secundario: {
    fontSize: 20,
  },
  imgContainer: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  detail: {
    flexGrow: 1,
    backgroundColor: "#d6661128",
    padding: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  ingredientsTags: {
    backgroundColor: "#FF914D",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 5,
    marginBottom: 5,
    flexDirection: "row",
    fontSize: 15,
  },
  ingredientContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 10,
  },
  inst: {
    fontSize: 18,
    marginTop: 20,
    lineHeight: 23,
  },
});
