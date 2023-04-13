import React from "react";
import { FlatList, StyleSheet, ActivityIndicator } from "react-native";

import PokemonCard from "./PokemonCard";

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});

const PokemonList = ({ pokemons, loadMorePokemons, nextPokemonsUrl }) => {
  return (
    <FlatList
      data={pokemons}
      keyExtractor={(p) => String(p.id)}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={nextPokemonsUrl && loadMorePokemons}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <ActivityIndicator
          size="large"
          style={styles.spinner}
          color="#aeaeae"
        />
      }
    />
  );
};

export default PokemonList;
