import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import ToolBar from "./ToolBar";
import UsersStory from "./UsersStory";
import Feed from "./Feed";
import { db } from "../firebase";

const HomeScreen = (props) => {
  const isFocused = useIsFocused();
  const [feed, setFeed] = useState(null);
  useEffect(() => {
    if (isFocused)
      props.StackNavigation.setOptions({
        headerShown: true,
      });
  });
  useEffect(() => {
    (async () => {
      const user = await db.collection("users").get();
      const data = user.docs.map((doc) => doc.data());
      setFeed(data[0].HomeFeed[0]);
    })();
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
