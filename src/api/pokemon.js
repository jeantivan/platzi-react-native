import { API_HOST } from "../utils/constants";

export async function getPokemons() {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;

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
