import React from "react";
import { View, Text, StyleSheet } from "react-native";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  pill: {
    marginHorizontal: 10,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 50,
  },
});

const Types = ({ types }) => {
  return (
    <View style={styles.content}>
      {types.map(({ type }) => (
        <View
          key={type.name}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(type.name),
          }}
        >
          <Text style={{ color: "#fff", textTransform: "capitalize" }}>
            {type.name}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Types;
