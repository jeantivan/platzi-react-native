import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import getColorByPokemonType from "../utils/getColorByPokemonType";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  order: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    textTransform: "capitalize",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 15,
    paddingLeft: 5,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});

export default function PokemonCard({ pokemon }) {
  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = {
    backgroundColor: pokemonColor,
    ...styles.bgStyles,
  };

  const navigation = useNavigation();

  const goToPokemon = () => {
    navigation.navigate("Pokemon", {
      id: pokemon.id,
      pokemonColor,
    });
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.order}>#{`${pokemon.id}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
