import { createContext, useContext, useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const UseApiContext = createContext();

export const ApiContext = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const recipesRef = collection(db, "recetas");

  const getRecipes = async () => {
    const querySnapshot = await getDocs(recipesRef);
    const recips = querySnapshot.docs.map((doc) => doc.data());
    setRecipes(recips);
  };

  const addUser = async (newUser) => {
    // AGREGAR UN NUEVO USUARIO A LA COLECCION "usuarios" CON SU CORRESPONDIENTE ARRAY.
    const user = await addDoc(collection(db, "usuarios"), newUser);
    return user;
  };

  useEffect(() => {
    getRecipes();
  }, [recipes]);

  return (
    <UseApiContext.Provider value={{ recipes, addUser }}>
      {children}
    </UseApiContext.Provider>
  );
};
