import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ButtonFillProps {
    text: string;
    onPress?: () => void;
}
const ButtonFill: React.FC<ButtonFillProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity className='bg-primary-orange rounded-[.75rem] flex px-[6.687rem] py-[1.313rem] w-[100%]'  onPress={onPress}>
      <Text className='text-white text-[1rem] font-bold capitalize w-full text-center'>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonFill
