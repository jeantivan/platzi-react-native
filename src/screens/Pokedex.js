import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemons, getPokemonDetails } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

const Pokedex = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setLoading(true);
    const loadPokemons = async () => {
      try {
        const pokemonsRes = await getPokemons();

        const pokemonsWithDetails = [];

        for await (const pokemon of pokemonsRes.results) {
          const pokemonDetails = await getPokemonDetails(pokemon.url);

          pokemonsWithDetails.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image:
              pokemonDetails.sprites.other["official-artwork"].front_default,
          });
        }
        console.log("Hola..");
        setPokemons([...pokemons, ...pokemonsWithDetails]);
      } catch (error) {
        console.error(error);
      }
    };

    loadPokemons();
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log(pokemons);
  }, [pokemons]);

  return (
    <View>
      <Text>{loading ? "Cargando..." : "Pokedex"}</Text>
      <PokemonList pokemons={pokemons} />
    </View>
  );
};

export default Pokedex;
