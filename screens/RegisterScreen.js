import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firebase-config";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import bg from "../assets/fondoChefio.png";
import { UseApiContext } from "../context/Context";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const navigation = useNavigation();
  const apiContext = useContext(UseApiContext);
  const { addUser } = apiContext;

  // const handlerCreateAccount = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log(`New User: ${user}`);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const onSubmit = async () => {
    console.log("llegue");
    const newUser = {
      email: email,
      nickname: nickName,
      password: password,
      favoritos: { array: [], titulo: "favoritos" },
    };
    const nUser = await addUser(newUser);
    console.log(nUser);
    navigation.navigate("Login");
  };

  return (
    <ImageBackground source={bg} resizeMode={"cover"} style={styles.image}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
          Crea tu cuenta!
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.input}
        />
        <TextInput
          placeholder="Nickname"
          onChangeText={(text) => setNickName(text)}
          value={nickName}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => onSubmit()}
          style={styles.botonRegistro}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Registrarme</Text>
        </TouchableOpacity>

        <View style={styles.foot}>
          <Text style={{ color: "#fff" }}>Si ya tienes una cuenta</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.touch}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "900",
              }}
            >
              Logueate!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 70,
    borderRadius: 15,
    paddingLeft: 20,
    marginTop: 30,
    fontSize: 17,
    color: "#000",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  botonRegistro: {
    width: "80%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 60,
    fontSize: 17,
    color: "#fff",
    backgroundColor: "#F15C25",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  touch: { marginLeft: 20 },
  foot: {
    position: "absolute",
    bottom: 80,
    height: 100,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
