import { NativeStackScreenProps } from '@react-navigation/native-stack'
import RouteName from './RouteName'
export type RootStackParamList = {
  [RouteName.SPLASH_SCREEN]: undefined // No params
  [RouteName.SWIPER_SCREEN]: undefined // No params
  [RouteName.LOGIN_SCREEN]: undefined // No params
  [RouteName.SIGNUP_SCREEN]: undefined // No params
  [RouteName.OTP_VERYFY_SCREEN]: { phoneNumber: string } // Example param
  [RouteName.HOME_SCREEN]: undefined // No params
}

export type RootStackProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>
