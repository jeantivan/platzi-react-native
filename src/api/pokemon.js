import { API_HOST } from "../utils/constants";

export async function getPokemons(
  url = `${API_HOST}/pokemon?limit=20&offset=0`
) {
  try {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetails(pokemonUrl) {
  try {
    const response = await fetch(pokemonUrl);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export const getPokemonsWithDetails = async (pokemonList) => {
  let pokemonsWithDetails = [];

  for await (const pokemon of pokemonList) {
    const pokemonDetails = await getPokemonDetails(pokemon.url);

    pokemonsWithDetails.push({
      id: pokemonDetails.id,
      name: pokemonDetails.name,
      type: pokemonDetails.types[0].type.name,
      order: pokemonDetails.order,
      image: pokemonDetails.sprites.other["official-artwork"].front_default,
    });
  }

  return pokemonsWithDetails;
};
