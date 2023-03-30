import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screens/Account";
import Pokedex from "../screens/Pokedex";
import Favorites from "../screens/Favorites";

const BottomTab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Pokedex" component={Pokedex} />
      <BottomTab.Screen name="Favorites" component={Favorites} />
      <BottomTab.Screen name="Account" component={Account} />
    </BottomTab.Navigator>
  );
};

export default Navigation;
