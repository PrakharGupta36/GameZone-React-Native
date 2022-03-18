import React from "react";
import { View, Text, StatusBar } from "react-native";
import { globalStyles } from "../styles/global";
import { Linking } from "react-native";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.textAbout}>
        <Text style={globalStyles.textAboutInner}>
          Made by
          <Text
            style={{
              fontStyle: "italic",
              paddingLeft: 10,
              textDecorationLine: "underline",
            }}
            onPress={() => Linking.openURL("https://twitter.com/prakhar_369")}>
            Prakhar ❤️
          </Text>
        </Text>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}
