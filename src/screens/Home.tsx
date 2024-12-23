import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white" style={{ paddingTop: StatusBar.currentHeight }}>
      <View className="px-5">
        <Text className="text-base text-gray-500">Ứng dụng dạy đan móc len</Text>
        <Text className="text-[48px] text-gray-800">Yarn Craft</Text>
        {/* Search bar */}
        <View></View>
        {/* For you */}
        <View>
          <Text className="text-[20px] font-semibold text-gray-800">Dành cho bạn</Text>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
