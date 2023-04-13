import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import { API_HOST } from "../utils/constants";
import { getPokemonDetails } from "../api/pokemon";

const Pokemon = ({ navigation, route }) => {
  const { id } = route.params;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const response = await getPokemonDetails(`${API_HOST}/pokemon/${id}`);

        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    };

    loadPokemon();
  }, []);

  if (!pokemon) return null;

  return (
    <View>
      <Text>Página de pokemon con id: {id}</Text>
      <Text>Pokemon: {pokemon.name}</Text>
    </View>
  );
};

export default Pokemon;
