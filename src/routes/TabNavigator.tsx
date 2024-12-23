import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeTab, MydiaryTab, Profile, TrainingTab } from '@/screens'
import { createStackNavigator } from '@react-navigation/stack'
import { VectoreIcons, AppHeader } from '@/components'
import { Colors, SF } from '@/utils'
import { useTranslation } from 'react-i18next'
import RouteName from './RouteName'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const headerArray = {
  headerShown: true,
  // headerTitleStyle: Style.headerTitleStyle,
  // headerStyle: Style.headerStyle,
  headerShadowVisible: false,
}
console.log('🚀 ~ headerArray:', headerArray)

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homese"
        component={HomeScsreenTabAll}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
export default Root

export function HomeScsreenTabAll(props: any) {
  const { t } = useTranslation()
  return (
    <Tab.Navigator
      initialRouteName={RouteName.HOME_TAB}
      screenOptions={{
        headerShown: false, // Manage headers at the Tab.Screen level
        tabBarActiveTintColor: Colors.theme_background,
        tabBarInactiveTintColor: Colors.black_text_color,
        tabBarStyle: {
          backgroundColor: Colors.white_text_color,
          paddingTop: 0,
        },
      }}
    >
      <Tab.Screen
        name={RouteName.HOME_TAB}
        component={HomeTab}
        options={{
          headerTitle: () => <AppHeader {...props} headerTitle={t('Home_Text')} />,
          ...headerArray,
          tabBarLabel: t('Home_Text') || 'Home',
          tabBarIcon: ({ focused }) => (
            <VectoreIcons
              icon="Feather"
              size={SF(19)}
              name="home"
              color={focused ? Colors.theme_background : Colors.black_text_color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.TRAINING_TAB}
        component={TrainingTab}
        options={{
          headerTitle: () => <AppHeader {...props} headerTitle={t('Training_Label')} />,
          ...headerArray,
          tabBarLabel: t('Training_Title_Label') || 'Training',
          tabBarIcon: ({ focused }) => (
            <View>
              <VectoreIcons
                icon="FontAwesome5"
                name="dumbbell"
                color={focused ? Colors.theme_background : Colors.black_text_color}
                size={SF(18)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.MY_DAIRY_TAB}
        component={MydiaryTab}
        options={{
          headerTitle: () => <AppHeader {...props} headerTitle={t('My_Dairy_Label')} />,
          ...headerArray,
          tabBarLabel: t('My_Dairy_Label') || 'Dairy',
          tabBarIcon: ({ focused }) => (
            <VectoreIcons
              icon="AntDesign"
              name="book"
              size={SF(23)}
              color={focused ? Colors.theme_background : Colors.black_text_color}
            />
          ),
        }}
      />

      <Tab.Screen
        name={RouteName.PROFILE_TAB}
        component={Profile}
        options={{
          headerTitle: () => <AppHeader {...props} headerTitle={t('Profile_Text')} />,
          ...headerArray,
          tabBarLabel: t('Profile_Text') || 'Profile',
          tabBarIcon: ({ focused }) => (
            <VectoreIcons
              icon="FontAwesome"
              size={SF(19)}
              name="user-circle"
              color={focused ? Colors.theme_background : Colors.black_text_color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
