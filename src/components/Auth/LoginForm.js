import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMsg from "../ErrorMsg";

import { user, userData } from "../../utils/userDB";

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 35,
    marginBottom: 20,
  },
  inputContainer: {
    margin: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  inputError: {
    borderColor: "#f00",
    color: "#f00",
  },
  errorMsg: {
    marginTop: 4,
    marginHorizontal: 10,
    fontSize: 14,
    color: "#f00",
  },
  submitBtn: {
    padding: 10,
  },
});

const validationSchema = Yup.object({
  username: Yup.string().required("Nombre de usuario es requerido!"),
  password: Yup.string()
    .min(3, "Debe tener mínimo 3 caracteres")
    .required("La contraseña es requerida!"),
});

const initialValues = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const [error, setError] = useState(null);

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues,
    onSubmit(fields, actions) {
      setError(null);
      const { password, username } = fields;

      if (password !== user.password || username !== user.username) {
        setError(true);
        actions.resetForm({ values: initialValues });
        return;
      }

      console.log(fields);
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      {error && (
        <View style={{ marginHorizontal: 10, marginBottom: 50 }}>
          <ErrorMsg msg="Nombre de usuario o contraseña es incorrecto" />
        </View>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => formik.setFieldValue("username", text)}
          value={formik.values.username}
          placeholder="Nombre de usuario"
          style={[
            styles.input,
            formik.touched.username && formik.errors.username
              ? styles.inputError
              : {},
          ]}
          autoCapitalize="none"
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={styles.errorMsg}>{formik.errors.username}</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => formik.setFieldValue("password", text)}
          value={formik.values.password}
          placeholder="Contraseña"
          style={[
            styles.input,
            formik.touched.password && formik.errors.password
              ? styles.inputError
              : {},
          ]}
          autoCapitalize="none"
          secureTextEntry
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.errorMsg}>{formik.errors.password}</Text>
        )}
      </View>

      <View style={styles.submitBtn}>
        <Button
          title="Entrar"
          onPress={formik.handleSubmit}
          disabled={!formik.isValid || !formik.dirty}
        />
      </View>
    </View>
  );
};

export default LoginForm;
