import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

import PokemonCard from "./PokemonCard";

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  text: {
    margin: 5,
  },
});

const PokemonList = ({ pokemons }) => {
  return (
    <FlatList
      data={pokemons}
      keyExtractor={(p) => String(p.id)}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

export default PokemonList;
