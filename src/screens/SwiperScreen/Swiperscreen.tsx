import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { SwiperStyle } from '@/styles'
import { Button, Spacing } from '@/components'
import { RootStackProps, RouteName } from '@/routes'
import { SH, Colors } from '@/utils'
import { useTranslation } from 'react-i18next'
import { swiperData } from './data'

type SwiperScreenProps = RootStackProps<'Swiperscreen'>

const SwiperScreen = ({ navigation }: SwiperScreenProps) => {
  const { t } = useTranslation()

  const RenderItem = ({ item }: any) => {
    return (
      <View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={SwiperStyle.ScrollViewStyle}
        >
          <View>
            <View style={SwiperStyle.AnimationViewStyle}>{item.animation}</View>
          </View>
        </ScrollView>
        <Text style={SwiperStyle.TitleStyles}>{t(item.title)}</Text>
        <Text style={SwiperStyle.Textstyle}>{t(item.text)}</Text>
      </View>
    )
  }
  const _renderDoneButton = () => {
    return (
      <View style={SwiperStyle.ButtonCircle}>
        <Button
          title={t('Get_Started')}
          buttonStyle={SwiperStyle.getStarterBtnStyle}
          // onPress={() => navigation.navigate(RouteName.SELECT_LANGUAGE)}
          onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}
        />
      </View>
    )
  }
  const _renderNextButton = () => {
    return (
      <View>
        <Spacing space={SH(12)} />
        <Text style={SwiperStyle.NextTextStyle}>{t('Next_Text')}</Text>
      </View>
    )
  }
  const _renderSkipButton = () => {
    return (
      <View>
        <TouchableOpacity
          // onPress={() => navigation.navigate(RouteName.SELECT_LANGUAGE)}
          onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}
        >
          <Spacing space={SH(12)} />
          <Text style={SwiperStyle.NextTextStyle}>{t('Skip_Text')}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <>
      <StatusBar backgroundColor={Colors.bgwhite} barStyle={'dark-content'} />
      <AppIntroSlider
        data={swiperData}
        renderItem={RenderItem}
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
        renderDoneButton={_renderDoneButton}
        showSkipButton={true}
        activeDotStyle={SwiperStyle.ActiveDotStyles}
        // dotStyle={SwiperStyles.DotSwiperStyle}
      />
    </>
  )
}
export default SwiperScreen
