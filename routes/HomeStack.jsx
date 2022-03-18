import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../components/Header";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Game Zone' />,
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Reviews",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#0077B6",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontFamily: "Poppins_400Regular",
    },
  },
});

export default HomeStack;
