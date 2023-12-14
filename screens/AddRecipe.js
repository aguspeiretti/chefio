import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  PickerDialog,
  Pressable,
} from "react-native";
import fondo from "../assets/fondo2.png";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { db, storage } from "../firebase/firebase-config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export default function AddRecipe() {
  const [title, setTitle] = useState("");
  const [portions, setPortions] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [difficulty, setDifficulty] = useState("Baja");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const navigation = useNavigation();

  const createRecipe = async (values) => {
    return addDoc(collection(db, "recetas"), { ...values }).then(() =>
      console.log("producto agregado")
    );
  };

  const handleIngredientChange = (text) => {
    setNewIngredient(text);
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== "") {
      // Agregar el nuevo ingrediente al array
      setIngredients([...ingredients, newIngredient]);
      // Limpiar el campo de entrada después de agregar
      setNewIngredient("");
    }
  };
  const handleRemoveIngredient = (index) => {
    // Crear una nueva lista de ingredientes sin el elemento en el índice dado
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handlePressDificulty = (dificulty) => {
    setDifficulty(dificulty);
  };

  const handleSubmit = () => {
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    const formData = {
      titulo: title,
      porciones: portions,
      tiempoPreparacion: prepTime,
      infredientes: ingredients,
      dificultad: difficulty,
      instrucciones: description,
    };

    createRecipe(formData);
    // navigation.navigate("Home");
  };

  return (
    <ImageBackground source={fondo} resizeMode={"cover"} style={styles.image}>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.header}>Agrega tu receta!</Text>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              value={title}
              placeholder="Escribe el titulo de tu receta..."
              onChangeText={(text) => setTitle(text)}
            />

            <View style={styles.div1}>
              <TextInput
                style={styles.input}
                value={portions}
                placeholder="Cuantas porciones..."
                onChangeText={(text) => setPortions(text)}
                keyboardType="numeric"
              />

              <TextInput
                style={styles.input}
                value={prepTime}
                placeholder="Tiempo de Preparación (minutos)"
                onChangeText={(text) => setPrepTime(text)}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.ingredient}>
              <Text style={styles.ingredientText}>Ingredientes:</Text>
              <View style={styles.ingredientInput}>
                <TextInput
                  style={styles.input}
                  value={newIngredient}
                  onChangeText={handleIngredientChange}
                  placeholder="ejemplo : 500g de manteca"
                />
                <TouchableOpacity
                  style={styles.addIngredient}
                  onPress={handleAddIngredient}
                >
                  <Text style={{ fontSize: 25 }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.ingredientContainer}>
              {ingredients.map((ingredient, index) => (
                <View key={index} style={styles.ingredientsTags}>
                  <Text style>{ingredient}</Text>
                  <Pressable
                    onPress={() => handleRemoveIngredient(index)}
                    style={styles.btnEliminarIngrediente}
                  >
                    <Text>X</Text>
                  </Pressable>
                </View>
              ))}
            </View>

            <Text style={styles.difficultyText}>Dificultad:</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <Pressable
                onPress={() => handlePressDificulty("Baja")}
                style={[
                  styles.btnDificulty,
                  difficulty === "Baja" && styles.selectedBtn,
                ]}
              >
                <Text>Baja</Text>
              </Pressable>
              <Pressable
                onPress={() => handlePressDificulty("Media")}
                style={[
                  styles.btnDificulty,
                  difficulty === "Media" && styles.selectedBtn,
                ]}
              >
                <Text>Media</Text>
              </Pressable>
              <Pressable
                onPress={() => handlePressDificulty("Alta")}
                style={[
                  styles.btnDificulty,
                  difficulty === "Alta" && styles.selectedBtn,
                ]}
              >
                <Text>Alta</Text>
              </Pressable>
            </View>

            <Text style={styles.difficultyText}>Paso a paso:</Text>
            <TextInput
              style={styles.textArea}
              value={description}
              onChangeText={(text) => setDescription(text)}
              multiline
            />

            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={styles.btnAgregar}
                onPress={handleSubmit}
              >
                <Text>Agregar receta!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  header: {
    marginTop: 90,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 25,
  },
  container: {
    padding: 20,
    marginTop: 20,
  },
  input: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 30,
    flexGrow: 1,
    marginHorizontal: 5,
    textAlign: "center",
    backgroundColor: "#fff",
  },
  textArea: {
    height: "auto",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 30,
  },
  div1: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
    justifyContent: "space-between",
  },
  ingredient: {
    marginTop: 20,
  },
  addIngredient: {
    backgroundColor: "#FF914D",
    color: "white",
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  ingredientText: {
    fontSize: 18,
  },
  ingredientInput: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  difficultyText: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
  },
  btnDificulty: {
    backgroundColor: "#FFF",
    width: 80,
    height: 50,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnAgregar: {
    backgroundColor: "#FF914D",
    width: 200,
    height: 50,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ingredientContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
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
  },
  btnEliminarIngrediente: {
    backgroundColor: "#fff",
    width: 30,
    height: 30,
    borderRadius: 30,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedBtn: {
    backgroundColor: "#FF914D",
  },
});
