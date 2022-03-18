import React, { useState } from "react";
import {
  StatusBar,
  FlatList,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Modal,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Button, Card, Title } from "react-native-paper";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: `"Pokémon Theme" (also known as "Gotta catch 'em all!")[1][2] is a song written by John Siegler and John Loeffler and performed by Jason Paige. It is the original theme song for the first season of the English adaptation of the Pokémon anime.`,
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "4",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: `"Pokémon Theme" (also known as "Gotta catch 'em all!")[1][2] is a song written by John Siegler and John Loeffler and performed by Jason Paige. It is the original theme song for the first season of the English adaptation of the Pokémon anime.`,
      img: "../assets/images/2.jpeg",
      key: "5",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "6",
    },
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "7",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: `"Pokémon Theme" (also known as "Gotta catch 'em all!")[1][2] is a song written by John Siegler and John Loeffler and performed by Jason Paige. It is the original theme song for the first season of the English adaptation of the Pokémon anime.`,
      key: "8",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "9",
    },
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "10",
    },
  ]);

  const [modal, setModal] = useState(false);

  return (
    <View style={globalStyles.containerHome}>
      <Modal visible={modal}>
        <View styles={globalStyles.modal}>
          <Text> Hello from the Modal </Text>
          <Button onPress={() => setModal(!modal)}> Show Modal </Button>
        </View>
      </Modal>

      <View style={globalStyles.list}>
        <FlatList
          data={reviews}
          style={globalStyles.list}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Card style={globalStyles.card}>
              <Card.Content>
                <Title>{item.title}</Title>
              </Card.Content>
              <Card.Actions>
                <Button
                  onPress={() => {
                    navigation.navigate("ReviewDetails", item);
                  }}>
                  See Review
                </Button>
              </Card.Actions>
            </Card>
          )}
        />
      </View>
      <Button style={{ flex: 1 }} onPress={() => setModal(!modal)}>
        Show Modal
      </Button>
      <StatusBar style='auto' />
    </View>
  );
}
