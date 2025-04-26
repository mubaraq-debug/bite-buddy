import { View, Text } from 'react-native'
import React from 'react'

interface OnboardingLayoutProps {
  children: React.ReactNode;
}

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({ children }) => {
  return (
    <View className='px-4 bg-white h-screen w-screen pt-56'>
        {children}
    </View>
  )
}

export default OnboardingLayout