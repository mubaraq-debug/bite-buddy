import React from "react";
import { Text, View } from "react-native";
import './global.css'
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonFill from "./components/common/button-fill";
import ButtonTransaparent from "./components/button-transparent";
import BackIcon from "./components/common/back-icon";
import RegInput from "./components/common/reg-input";

export default function Index() {
  return (
    <SafeAreaView className="bg-white">
      <ButtonFill text="order now" />
      <ButtonTransaparent text="skip for now" />
      <BackIcon />
      <RegInput placeholder="name" />
    </SafeAreaView>
  );
}
