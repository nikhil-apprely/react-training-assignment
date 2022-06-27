import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Alert, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

export default function FormScreen() {
  const navigator = useNavigation();
  // const [value, setValue] = useState("");

  return (
    <View>
      <Formik
        initialValues={{ password: "", email: "", role: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Email is invalid!").required("Required"),
          password: Yup.string()
            .trim()
            .required("Password is required!")
            .min(8, "Password is too short!"),
          // role: Yup.string().role("Please select a role!").required("Required"),
        })}
        onSubmit={(values, formikActions) => {
          console.log("Hello", values);
          navigator.navigate("FormDisplay", values);
        }}
      >
        {(props) => (
          <Form>
            <View style={styles.container}>
              <TextInput
                name="email"
                style={styles.input}
                onChange={props.handleChange("email")}
                value={props.values.email}
                placeholder="Email Address"
              ></TextInput>

              {/* {console.log(props)} */}
              {props.touched.email && props.errors.email ? (
                <Text style={styles.error}>{props.errors.email}</Text>
              ) : null}

              <TextInput
                name="password"
                style={styles.input}
                onChange={props.handleChange("password")}
                value={props.values.password}
                placeholder="Password"
              ></TextInput>

              {props.touched.password && props.errors.password ? (
                <Text style={styles.error}>{props.errors.password}</Text>
              ) : null}

              <Picker
                selectedValue={props.values.role}
                onValueChange={props.handleChange("role")}
                style={styles.picker}
                name="role"
                // onChange={props.handleChange("role")}
                // value={props.values.role}
              >
                <Picker.Item label="Owner" value="owner" />
                <Picker.Item label="User" value="user" />
                <Picker.Item label="Admin" value="admin" />
              </Picker>

              {/* {props.touched.role && props.errors.role ? (
                <Text style={styles.error}>{props.errors.role}</Text>
              ) : null} */}

              <Button
                style={styles.buttonStyle}
                title="Submit"
                color="#000"
                onPress={props.handleSubmit}
              />
            </View>
          </Form>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 10,
    paddingHorizontal: 8,
    width: "100%",
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  picker: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  container: {
    margin: 20,
    padding: 15,
  },
  error: {
    margin: 8,
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
});
