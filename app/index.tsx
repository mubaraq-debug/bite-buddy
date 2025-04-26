import React from "react";
import { Text, View } from "react-native";
import './global.css'
import { NavigationContainer } from "@react-navigation/native";
import RootLayout from "./_layout";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./splash-screen";
import Onboarding from "./onboarding";
const Stack = createNativeStackNavigator()

export default function Index() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
}
