import React from "react";
import { View, Text, StatusBar } from "react-native";
import { globalStyles } from "../styles/global";
import { Card } from "react-native-paper";

export default function ReviewDetails({ navigation }) {
  console.log(typeof navigation.getParam("img"));
  return (
    <View style={globalStyles.containerReview}>
      <View>
        <Card style={globalStyles.card}>
          <Card.Cover
            fadeDuration={400}
            source={require(`../assets/images/${navigation.getParam(
              "key"
            )}.jpeg`)}
          />
          <Card.Title title={navigation.getParam("title")} />
          <Card.Content>
            <Text style={globalStyles.textReview}>
              {navigation.getParam("body")}
            </Text>
            <Text style={globalStyles.textReview}>
              Rating: {navigation.getParam("rating")}
            </Text>
          </Card.Content>
        </Card>
      </View>
      {/* <Text style={globalStyles.text}> {navigation.getParam("title")} </Text>
      <Text style={globalStyles.text}> {navigation.getParam("body")} </Text>
      <Text style={globalStyles.text}> {navigation.getParam("rating")} </Text> */}
      <StatusBar style='auto' />
    </View>
  );
}
