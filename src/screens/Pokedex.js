import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemons, getPokemonsWithDetails } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPokemonsUrl, setNextPokemonsUrl] = useState(null);

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const pokemonsRes = await getPokemons();

        const pokemonsWithDetails = await getPokemonsWithDetails(
          pokemonsRes.results
        );
        {
        }
        setNextPokemonsUrl(pokemonsRes.next);
        setPokemons([...pokemons, ...pokemonsWithDetails]);
      } catch (error) {
        console.error(error);
      }
    };

    loadPokemons();
  }, []);

  const loadMorePokemons = async () => {
    try {
      const nextPokemonsRes = await getPokemons(nextPokemonsUrl);

      const pokemonsWithDetails = await getPokemonsWithDetails(
        nextPokemonsRes.results
      );

      setNextPokemonsUrl(nextPokemonsRes.next);
      setPokemons([...pokemons, ...pokemonsWithDetails]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <PokemonList
        pokemons={pokemons}
        loadMorePokemons={loadMorePokemons}
        nextPokemonsUrl={nextPokemonsUrl}
      />
    </SafeAreaView>
  );
};

export default Pokedex;
