import React from "react";
import { Text, View } from "react-native";
import './global.css'
import { NavigationContainer } from "@react-navigation/native";
import RootLayout from "./_layout";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./splash-screen";
import Onboarding from "./onboarding";
import SecondOnboarding from "./onboarding/second-onboarding";
import ThirdOnboarding from "./onboarding/onboarding-three";
const Stack = createNativeStackNavigator()

export default function Index() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SecondOnboarding" component={SecondOnboarding} />
      <Stack.Screen name="ThirdOnboarding" component={ThirdOnboarding} />

    </Stack.Navigator>
  );
}
