import { Text, View, SafeAreaView, Image, Pressable, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import ButtonFill from '../components/common/button-fill'
import OnboardingLayout from './onboarding-layout'


const SecondOnboarding = ({navigation}: any) => {
  return (
    <OnboardingLayout>
    <SafeAreaView className='flex flex-col items-center justify-between h-full'>
      <Image source={require('../../assets/images/two.png')} />
      <View className='w-full flex flex-col items-center justify-center gap-7'>
        <Text className='text-[1.5rem] text-dark-text font-extrabold'>Order from chosen chef</Text>
        <Text className='text-gray-text text-[1.125rem] text-center w-full leading-[25px]'>Enjoy delicious meals from your favorite chef's fresh, fast, and just the way you like it.</Text>
        <ButtonFill text='next'  onPress={() => navigation.navigate('ThirdOnboarding')} />
        <TouchableOpacity>
          <Text className='text-gray-text capitalize w-full text-center'>skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </OnboardingLayout>
  )
}

export default SecondOnboarding
