import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import FavoritesNavigation from "./FavoritesNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

import pokeballImg from "../assets/pokeball.png";

const BottomTab = createBottomTabNavigator();

function PokeballIcon() {
  return (
    <Image source={pokeballImg} style={{ width: 75, height: 75, top: -15 }} />
  );
}

const Navigation = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="FavoritesNavigation"
        component={FavoritesNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="PokedexNavigation"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <PokeballIcon />,
        }}
      />
      <BottomTab.Screen
        name="AccountNavigation"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Navigation;
