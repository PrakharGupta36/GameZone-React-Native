import AppLoading from "expo-app-loading";
import React from "react";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

import Navigation from "./routes/Drawer";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigation />;
  }
}
