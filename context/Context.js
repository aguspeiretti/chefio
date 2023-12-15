import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { User } from "react-native-feather";

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

  const collectionByParam = async (nameCollection, param, type) => {
    //   // // REVISAR EN LA DOCUMENTACION DE FIREBASE COMO LLAMAR DOCUMENTOS CON PARAMETRO WHERE. USAR "param" Y "type".
    //   // const collectionsData = await getDocs(
    //   //   query(collection(db, nameCollection), where(param, "==", type))
    //   // );
    //   // console.log("este es el colections docs", collectionsData);
    //   // const collections = collectionsData.docs.map((doc) => {
    //   //   return { id: doc.id, ...doc.data() };
    //   // });
    //   // console.log("este es el colections", collections);
    //   // return collections;
    console.log("param:", param, "type", type);
    const querySnapshot = await getDocs(collection(db, nameCollection));
    let users = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      users.push({ id: doc.id, data: doc.data() });
    });

    console.log(users);

    const filtrado = users.find((item) => item.data.email == type);

    return filtrado;
  };

  useEffect(() => {
    getRecipes();
  }, [recipes]);

  return (
    <UseApiContext.Provider value={{ recipes, addUser, collectionByParam }}>
      {children}
    </UseApiContext.Provider>
  );
};
