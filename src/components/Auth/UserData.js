import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import useAuth from "../../hooks/useAuth";

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
  },
  dataContent: {
    marginBottom: 20,
  },
  dataItem: {
    marginBottom: 20,
  },
  dataLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  dataContent: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

const ItemData = ({ label, content }) => (
  <View style={styles.dataItem}>
    <Text style={styles.dataLabel}>{label}</Text>
    <Text style={styles.dataContent}>{content}</Text>
  </View>
);

const UserData = () => {
  const { auth, logout } = useAuth();
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>
          Bienvenido, {`${auth.firstName} ${auth.lastName}`}
        </Text>
      </View>

      <View style={styles.dataContent}>
        <ItemData label="Nombre" content={auth.firstName} />
        <ItemData label="Apellido" content={auth.lastName} />
        <ItemData label="Nombre de usuario" content={auth.username} />
      </View>
      <Button onPress={logout} title="Cerrar sesión" color="#F2555A" />
    </View>
  );
};

export default UserData;
