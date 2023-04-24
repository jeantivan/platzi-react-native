import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const styles = StyleSheet.create({
  container: {
    minHeight: 64,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#F2555A",
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: "white",
    marginLeft: 12,
    flexShrink: 1,
  },
});

const ErrorMsg = ({ msg }) => {
  return (
    <View style={styles.container}>
      <Icon name="exclamation-circle" size={18} color="white" />
      <Text style={styles.text}>{msg}</Text>
    </View>
  );
};

export default ErrorMsg;
