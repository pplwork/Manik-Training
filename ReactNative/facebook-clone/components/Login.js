import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import auth from "@react-native-firebase/auth";
import { useSelector } from "react-redux";
const Login = ({ navigation }) => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const logged = useSelector((state) => state.auth);
  const handleLogin = async () => {
    if (text && password) {
      let cred = await auth().signInWithEmailAndPassword(text, password);
      if (cred.user.uid) {
        navigation.navigate("facebook");
      }
    }
  };
  if (logged.isLoggedin) {
    navigation.navigate("facebook");
  }
  return (
    <View style={styles.random}>
      <Image
        source={require("../assets/fb-login.jpeg")}
        style={{ height: 200, width: "100%", marginTop: -20 }}
      />
      <View style={styles.wrapper}>
        <TextInput
          style={{
            padding: 10,
            fontSize: 18,
            borderBottomColor: "#CCD0D5",
            borderBottomWidth: 1,
          }}
          placeholder="Email"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <TextInput
          style={{
            padding: 10,
            fontSize: 18,
            borderBottomColor: "#CCD0D5",
            borderBottomWidth: 1,
            marginTop: 5,
          }}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          defaultValue={password}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={{ color: "#ffffff", fontSize: 15, fontWeight: "800" }}>
            Log In
          </Text>
        </TouchableOpacity>
        <Text style={styles.fgpass}>Forgot Password ? </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 40,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "#CCD0D5" }} />
          <View>
            <Text
              style={{
                width: 50,
                textAlign: "center",
                color: "#8D949E",
                fontWeight: "bold",
              }}
            >
              OR
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "#CCD0D5" }} />
        </View>
        <TouchableOpacity
          style={{
            ...styles.button,
            width: "80%",
            alignSelf: "center",
            backgroundColor: "#00A400",
          }}
          onPress={() => navigation.navigate("signup")}
        >
          <Text style={{ color: "#ffffff", fontSize: 15, fontWeight: "800" }}>
            Create New Facebook Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  random: {
    flex: 1,
    width: "100%",
    // backgroundColor: "orange",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#1877F2",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  wrapper: {
    marginHorizontal: 30,
    marginTop: 120,
  },
  fgpass: {
    marginVertical: 20,
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#1877F2",
  },
});
