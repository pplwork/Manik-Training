import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import ToolBar from "./ToolBar";
import UsersStory from "./UsersStory";
import Feed from "./Feed";
// import { db } from "../firebase";
import firestore from "@react-native-firebase/firestore";

const HomeScreen = (props) => {
  const isFocused = useIsFocused();
  const [feed, setFeed] = useState("");
  useEffect(() => {
    if (isFocused)
      props.StackNavigation.setOptions({
        headerShown: true,
      });
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.View}>
        <ToolBar />
        <UsersStory />
        <Feed data={feed} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  View: {
    height: "100%",
  },
});
