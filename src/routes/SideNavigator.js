import React from 'react'
import { RouteName } from '.'
import { CustomSidebarMenu, AppHeader, ChatRedirectFun } from '../components'
import { Colors } from '../utils'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'
import { TabNavigator } from '.'
import {
  Chatscreen,
  SettingsScreen,
  HelpScreen,
  FAQScreen,
  ReviewsScreen,
  NotificationScreen,
} from '../screens'
import { Style } from '../styles'

const SideNavigator = () => {
  const Stack = createNativeStackNavigator()
  const Drawer = createDrawerNavigator()
  const { t } = useTranslation()

  const HeaderArray = {
    headerShown: true,
    headerTintColor: Colors.theme_background,
    headerShadowVisible: false,
    headerStyle: Style.headerStyle,
  }

  return (
    <Drawer.Navigator
      drawerContent={(drawProps) => <CustomSidebarMenu {...drawProps} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: Colors.white_text_color,
        },
      }}
    >
      <Stack.Screen name={RouteName.HOME_SCREEN} component={TabNavigator} />
      <Drawer.Screen
        name={RouteName.CHAT_SCREEN}
        component={Chatscreen}
        options={{
          headerTitle: (headerProps) => (
            <AppHeader {...headerProps} headerTitle={t('Graham_Gooch')} />
          ),
          headerRight: () => <ChatRedirectFun />,
          ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.HELP_SCREEN}
        component={HelpScreen}
        options={{
          headerTitle: (headerProps) => (
            <AppHeader
              rightView={Style.RemoveBgColor}
              {...headerProps}
              headerTitle={t('Help_Text')}
            />
          ),
          ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.FAQ_SCREEN}
        component={FAQScreen}
        options={{
          headerTitle: (headerProps) => <AppHeader {...headerProps} headerTitle={t('FAQ_Text')} />,
          ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.NOTIFICTION_SCREEN}
        component={NotificationScreen}
        options={{
          headerTitle: (headerProps) => (
            <AppHeader
              rightView={Style.RemoveBgColor}
              {...headerProps}
              headerTitle={t('Notification_Text')}
            />
          ),
          ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.REVIEWS_SCREEN}
        component={ReviewsScreen}
        options={{
          headerTitle: (headerProps) => (
            <AppHeader
              rightView={Style.RemoveBgColor}
              {...headerProps}
              headerTitle={t('Reviews_Screen')}
            />
          ),
          ...HeaderArray,
        }}
      />

      <Drawer.Screen
        name={RouteName.SETTING_SCREEN}
        component={SettingsScreen}
        options={{
          headerTitle: (headerProps) => (
            <AppHeader
              rightView={Style.RemoveBgColor}
              {...headerProps}
              headerTitle={t('Setting_Text')}
            />
          ),
          ...HeaderArray,
        }}
      />
    </Drawer.Navigator>
  )
}
export default SideNavigator
