import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  LoginScreen,
  SplashScreen,
  Swiperscreen,
  // TranslationScreen,
  // ForgotPassword,
  // YourProgram,
  // WorkoutList,
  // ReadyToGoScreen,
  // StartScreen,
  // TakeRestScreen,
  // DietPlan,
  // DietDetails,
  // AboutSelfScreen,
  // AgeScreen,
  // WeightScreen,
  // GoalScreen,
  // WeHelpScreen,
  SignUpScreen,
  OtpVerifyScreen,
} from '@/screens'
import { RootStackParamList } from './RootType'
import RouteName from './RouteName'
import TabNavigator from './TabNavigator'

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Intro */}
        <Stack.Screen name={RouteName.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={RouteName.SWIPER_SCREEN} component={Swiperscreen} />
        {/* Auth */}
        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={RouteName.SIGNUP_SCREEN} component={SignUpScreen} />
        <Stack.Screen name={RouteName.OTP_VERYFY_SCREEN} component={OtpVerifyScreen} />
        <Stack.Screen name={RouteName.HOME_SCREEN} component={TabNavigator} />
        {/* 
        <Stack.Screen name={RouteName.ABOUT_SELF_SCREEN} component={AboutSelfScreen} />
        <Stack.Screen name={RouteName.AGE_SCREEN} component={AgeScreen} />
        <Stack.Screen name={RouteName.WEIGHT_SCREEN} component={WeightScreen} />
        <Stack.Screen name={RouteName.GOAL_SCREEN} component={GoalScreen} />
        <Stack.Screen name={RouteName.WE_HELP_SCREEN} component={WeHelpScreen} />

        <Stack.Screen name={RouteName.SELECT_LANGUAGE} component={TranslationScreen} />
        <Stack.Screen name={RouteName.FORGOT_PASSWORD} component={ForgotPassword} />
        <Stack.Screen name={RouteName.YOUR_PROGRAM} component={YourProgram} />
        <Stack.Screen name={RouteName.WORKOUT_LIST} component={WorkoutList} />
        <Stack.Screen name={RouteName.READY_TO_GO_SCREEN} component={ReadyToGoScreen} />
        <Stack.Screen name={RouteName.START_SCREEN} component={StartScreen} />
        <Stack.Screen name={RouteName.TAKE_REST_SCREEN} component={TakeRestScreen} />
        <Stack.Screen name={RouteName.DIET_PLAN_SCREEN} component={DietPlan} />
        <Stack.Screen name={RouteName.DIET_DETAILS} component={DietDetails} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default RootNavigator
