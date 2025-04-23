import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ButtonFillProps {
    text: string;
}
const ButtonFill: React.FC<ButtonFillProps> = ({text}) => {
  return (
    <TouchableOpacity className='bg-primary-orange rounded-[.75rem] flex px-[6.687rem] py-[1.313rem] w-[100%]'>
      <Text className='text-white text-[1rem] font-bold capitalize w-full text-center'>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonFill
