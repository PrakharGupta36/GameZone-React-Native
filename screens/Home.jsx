import React, { useState } from "react";
import {
  StatusBar,
  FlatList,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Button, Card, Title } from "react-native-paper";
import ModelView from "../components/ModalView";

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
  ]);

  const [modal, setModal] = useState(false);

  const modalFunction = () => {
    setModal(!modal);
  };

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModal(false);
  };

  return (
    <View style={globalStyles.containerHome}>
      <Modal visible={modal} animationType='fade'>
        <ModelView addReview={addReview} modalFunction={modalFunction} />
      </Modal>

      <ScrollView style={globalStyles.list}>
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
      </ScrollView>
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => setModal(!modal)}>
        <Text style={{ color: "white", fontSize: 30 }}> + </Text>
      </TouchableOpacity>
      <StatusBar style='auto' />
    </View>
  );
}
