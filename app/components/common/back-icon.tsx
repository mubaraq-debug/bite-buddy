import { Image, TouchableOpacity } from 'react-native'
import React from 'react'

const BackIcon = () => {
  return (
    <TouchableOpacity className='bg-[#ecf0f4] flex justify-center h-[2.813rem] w-[2.813rem] items-center p-[1.125rem] rounded-full'>
      <Image
      source={require('../../../assets/images/back-arrow.png')}
      />
    </TouchableOpacity>
  )
}

export default BackIcon
