import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firebase-config";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import bg from "../assets/fondoChefio.png";
import { UseApiContext } from "../context/Context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usuarioFiltrado, setUsuarioFiltrado] = useState(null);
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);
  const navigation = useNavigation();
  const apiContext = useContext(UseApiContext);
  const { collectionByParam } = apiContext;

  // const handleSignIn = async () => {
  //   await signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log(`New User: ${user}`);
  //       navigation.navigate("Home");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const validar = async () => {
    setEmail(email);
    setPassword(password);
    const todosUsers = await collectionByParam("usuarios", "email", email);
    console.log("este es todosUser", todosUsers);

    setUsuarioFiltrado(todosUsers);
  };

  useEffect(() => {
    if (usuarioFiltrado) {
      if (usuarioFiltrado.length === 0) {
        console.log("usuario no encontrado");
      } else {
        if (
          usuarioFiltrado.data.email === email &&
          usuarioFiltrado.data.password === password
        ) {
          navigation.navigate("Home");
        } else {
          console.log("usuario o password incorrectoss");
        }
      }
    }
  }, [email, password, usuarioFiltrado]);

  return (
    <ImageBackground source={bg} resizeMode={"cover"} style={styles.image}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
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
        <TouchableOpacity
          onPress={() => validar()}
          style={styles.botonRegistro}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Ingresar</Text>
        </TouchableOpacity>

        <View style={styles.foot}>
          <Text style={{ color: "#fff" }}>Si no tienes una cuenta</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.touch}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "900",
              }}
            >
              Registrate!
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
