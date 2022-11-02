import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./pages/homescreen";
import Header from "./components/Header/header";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Yapılcaklar Listesi" component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
