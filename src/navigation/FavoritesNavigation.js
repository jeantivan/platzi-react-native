import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";

const Stack = createNativeStackNavigator();

const FavoritesNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
};

export default FavoritesNavigation;
