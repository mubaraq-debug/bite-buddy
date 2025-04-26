import { TouchableOpacity, Text} from 'react-native'
import React from 'react'

interface ButtonTransaparentProps {
    text: string;
}

const ButtonTransaparent: React.FC<ButtonTransaparentProps> = ({text}) => {
  return (
    <TouchableOpacity className='border border-1 border-primary-orange rounded-[.75rem] flex px-[6.687rem] py-[1.313rem] w-[100%]'>
      <Text className='text-center w-full capitalize text-primary-orange text-base'>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonTransaparent
