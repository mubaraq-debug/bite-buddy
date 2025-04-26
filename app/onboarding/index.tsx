import { Text, View, SafeAreaView, Image, Pressable, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import ButtonFill from '../components/common/button-fill'
import OnboardingLayout from './onboarding-layout'

const Onboarding = ({navigation}: any) => {
  return (
    <OnboardingLayout>
      <SafeAreaView className='flex flex-col items-center justify-between h-full'>
        <Image source={require('../../assets/images/one.png')} className='h-[303px]' />
        <View className='w-full flex flex-col items-center justify-center gap-7'>
          <Text className='text-[1.5rem] text-dark-text font-extrabold'>All your favourites</Text>
          <Text className='text-gray-text text-[1.125rem] text-center w-full leading-[25px]'>Get all your loved foods in one place,
            you just place the order we do the rest</Text>
            <ButtonFill text='next' onPress={() => navigation.navigate('SecondOnboarding')} />
          <TouchableOpacity>
            <Text className='text-gray-text capitalize w-full text-center'>skip</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </OnboardingLayout>
  )
}

export default Onboarding
