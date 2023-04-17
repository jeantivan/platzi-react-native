import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    marginTop: 30,
    marginHorizontal: 14,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  statContainer: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 5,
  },
  block: {
    width: "30%",
  },
  statName: {
    fontSize: 18,
    color: "#a1a09a",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  statBase: {
    fontSize: 16,
    fontWeight: "bold",
    width: "12%",
  },
  bgBar: {
    flex: 1,
    backgroundColor: "#dedede",
    borderRadius: 20,
    height: 5,
  },
  bar: {
    // backgroundColor: "#fef000",
    // width: "40%",
    height: 5,
    borderRadius: 20,
  },
  border: { borderColor: "#f0f", borderWidth: 1, borderStyle: "solid" },
});

const BASE_STATS_NAMES = {
  hp: "Hp",
  attack: "Attack",
  defense: "Defense",
  speed: "Speed",
  "special-attack": "Sp. Attack",
  "special-defense": "Sp. Defense",
};

const statColor = (stat) => {
  if (stat <= 40) return "#FFB224";
  if (stat <= 79) return "#46A758";
  return "#0090FF";
};

const Stats = ({ stats }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map(({ stat, base_stat }) => (
        <View key={stat.name} style={styles.statContainer}>
          <View style={styles.block}>
            <Text style={styles.statName}>{BASE_STATS_NAMES[stat.name]}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.statBase}>{base_stat}</Text>
            <View style={styles.bgBar}>
              <View
                style={[
                  styles.bar,
                  {
                    width: `${Math.round((base_stat * 100) / 255)}%`,
                    backgroundColor: statColor(
                      Math.round((base_stat * 100) / 255)
                    ),
                  },
                ]}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Stats;
