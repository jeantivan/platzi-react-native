import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";

import { API_HOST } from "../utils/constants";
import { getPokemonDetails } from "../api/pokemon";

import Header from "../components/Pokemon/Header";

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
    <ScrollView>
      <Header
        name={pokemon.name}
        id={pokemon.id}
        type={pokemon.types[0].type.name}
        image={pokemon.sprites.other["official-artwork"].front_default}
      />
    </ScrollView>
  );
};

export default Pokemon;
