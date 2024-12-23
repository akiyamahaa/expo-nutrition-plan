import Home from '@/screens/Home'
import SplashScreen from '@/screens/SplashScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList = {
  SplashScreen: undefined
  Home: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
