import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";

import getColorByPokemonType from "../../utils/getColorByPokemonType";

const styles = StyleSheet.create({
  bgStyles: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    // marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    textTransform: "capitalize",
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 20,
  },
  image: {
    width: 250,
    height: 350,
    transform: [{ translateY: -50 }],
    resizeMode: "contain",
  },
});

const Header = ({ name, id, image, type }) => {
  const pokemonColor = getColorByPokemonType(type);
  const bgStyles = {
    backgroundColor: pokemonColor,
    ...styles.bgStyles,
  };
  return (
    <>
      <View style={bgStyles} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
          <Text style={{ ...styles.title, fontSize: 28 }}>
            #{`${id}`.padStart(3, 0)}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Header;
