import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'


interface RoundedIconProps {
    bgColor: string;
    color?: string;
    icon: any;
}
const RoundedIcon: React.FC<RoundedIconProps> = ({icon, bgColor, color}) => {
  return (
    <TouchableOpacity className={`${bgColor} flex justify-center h-[3.813rem] w-[3.813rem] items-center p-1 rounded-full`}>
      <View className={`${color}`}>{icon}</View>
    </TouchableOpacity>
  )
}

export default RoundedIcon
