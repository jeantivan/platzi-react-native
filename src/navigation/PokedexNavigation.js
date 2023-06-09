import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={({ route }) => ({
          headerStyle: { backgroundColor: route.params.pokemonColor },
          headerTintColor: "#fff",
        })}
      />
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
