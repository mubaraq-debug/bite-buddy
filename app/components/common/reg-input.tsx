import {Text, TextInput } from 'react-native'
import React, {useState} from 'react'

interface RegInputProps {
    placeholder: string;
}

const RegInput: React.FC<RegInputProps> = ({placeholder}) => {

    const [input, setInput] = useState("")
  return (
    <TextInput
        value={input}
        onChangeText={setInput}
        placeholder={placeholder}
        className='border-none border-0 bg-light-gray p-4 rounded-[0.625rem] px-[1.188rem] py-[1.37rem] w-full text-dark-text'
    >
    </TextInput>
  )
}

export default RegInput
