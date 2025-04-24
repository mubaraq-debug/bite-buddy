import { Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

interface FormInputProps {
  label: string;
  icon?: any
}

const FormInput: React.FC<FormInputProps> = ({ label, icon }) => {

  const [input, setInput] = useState("")
  return (
    <View className='flex flex-col gap-2'>
      <Text className='uppercase font-normal text-dark-text text-sm'>{label}</Text>
      <View className='border-none border-0 bg-light-gray p-4 rounded-[0.625rem] px-[1.188rem] py-[1.37rem] flex flex-row items-center justify-between text-dark-text'>
        <TextInput
          value={input}
          onChangeText={setInput}
          className='flex-[.9]'
        >
        </TextInput>
        <View className='flex-[.1]'>{icon}</View>
      </View>
    </View>
  )
}

export default FormInput
