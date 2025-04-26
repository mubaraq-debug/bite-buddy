import { ImageBackground } from 'react-native'
import React, {useEffect} from 'react'

const SplashScreen = ({navigation}: any) => {

    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigation.replace('Onboarding')
        }, 4000)

        return () => clearTimeout(timer)
    }, [])

  return (
   <ImageBackground
        source={require('../assets/images/splash-bg.png')}
        className='h-full w-full justify-center items-center flex-1'
        resizeMode='cover'
   ></ImageBackground>
  )
}

export default SplashScreen
