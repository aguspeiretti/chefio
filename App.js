import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AddRecipe from "./screens/AddRecipe";
import Favorites from "./screens/Favorites";
import RecipeDetail from "./screens/RecipeDetail";
import { ApiContext } from "./context/Context";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApiContext>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Register"
        >
          <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
          <Stack.Screen name="Favorites" component={Favorites} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddRecipe" component={AddRecipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApiContext>
  );
}

export default App;
