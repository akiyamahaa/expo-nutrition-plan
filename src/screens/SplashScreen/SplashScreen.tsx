import React, { useEffect } from 'react'
import { View, StatusBar } from 'react-native'
import { Style } from '../../styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RootStackProps, RouteName } from '@/routes'
import { Lottie } from '../../components'
import { Colors } from '../../utils'
import images from '@/images'

type Props = RootStackProps<'SplashScreen'>

const SplashScreen = ({ navigation }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('user_id').then(() => navigation.replace(RouteName.SWIPER_SCREEN))
    }, 2000)
  }, [navigation])
  return (
    <View style={Style.SplashMinView}>
      <StatusBar backgroundColor={Colors.bgwhite} barStyle={'dark-content'} />
      <View style={Style.MinViewStyleSplash}>
        <Lottie source={images.Splash_Swiper} />
      </View>
    </View>
  )
}
export default SplashScreen
