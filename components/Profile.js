import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import fotoPerfil from "../assets/fotoPerfil.jpg";

export default function Profile() {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.avatar}>
        <View style={styles.avatarC}>
          <Image
            source={fotoPerfil}
            style={styles.imagen}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: "#FF914D",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  avatarC: {
    width: 85,
    height: 85,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  imagen: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
});
