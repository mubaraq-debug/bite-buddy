import { Text, View, SafeAreaView, Image, Pressable, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import ButtonFill from '../components/common/button-fill'
import OnboardingLayout from './onboarding-layout'


const ThirdOnboarding = () => {
  return (
    <OnboardingLayout>
    <SafeAreaView className='flex flex-col items-center justify-between h-full'>
      <Image source={require('../../assets/images/three.png')} />
      <View className='w-full flex flex-col items-center justify-center gap-7'>
        <Text className='text-[1.5rem] text-dark-text font-extrabold'>Free delivery offers</Text>
        <Text className='text-gray-text text-[1.125rem] text-center w-full leading-[25px]'>Enjoy your favorite meals delivered to your doorstep at no extra cost. Limited time only!</Text>
        <ButtonFill text='next' />
        <TouchableOpacity>
          <Text className='text-gray-text capitalize w-full text-center'>skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </OnboardingLayout>
  )
}

export default ThirdOnboarding
