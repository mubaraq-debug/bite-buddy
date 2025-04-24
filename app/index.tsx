import React from "react";
import { Text, View } from "react-native";
import './global.css'
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonFill from "./components/common/button-fill";
import ButtonTransaparent from "./components/button-transparent";
import BackIcon from "./components/common/back-icon";
import FormInput from "./components/common/form-input";

import { Ionicons } from '@expo/vector-icons';
import RoundedIcon from "./components/common/rounded-icon";

export default function Index() {
  return (
    <SafeAreaView className="bg-white">
      <ButtonFill text="order now" />
      <ButtonTransaparent text="skip for now" />
      <BackIcon />
      <FormInput label="name" />
      <RoundedIcon bgColor="bg-black" icon={<Ionicons name="person-outline" size={24} color="white" />} />
    </SafeAreaView>
  );
}
