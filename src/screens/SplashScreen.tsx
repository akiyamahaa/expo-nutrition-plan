import { RootStackParamList } from '@/navigation';
import React, { useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';


const splashImage = [
  require('../../assets/img/splash1.jpeg'),
  require('../../assets/img/splash2.jpeg'),
  require('../../assets/img/splash3.jpeg'),
];

type Props = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;

const SplashScreen = ({ navigation }: Props) => {
  const [index, setIndex] = useState(0);

  const onNext = () => {
    if (index < splashImage.length) {
      setIndex(index + 1);
    }
    if (index === splashImage.length - 1) {
      navigation.navigate('Home');
    }
  };
  return (
    <View className="flex-1">
      <ImageBackground className="flex-1 justify-end bg-cover px-6" source={splashImage[index]}>
        <TouchableOpacity
          onPress={onNext}
          className="bg-primary mb-12 items-center justify-center rounded-2xl py-4">
          <Text className="text-lg font-semibold text-white">{index < 2 ? 'Tiếp' : 'Bắt đầu'}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
