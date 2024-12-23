import { Lottie } from '@/components'
import images from '@/images'

export const swiperData = [
  {
    key: 's1',
    text: 'Swiperfirst',
    title: 'Swipertitle',
    animation: <Lottie source={images.First_Swiper} />,
  },
  {
    key: 's2',
    text: 'SwiperFirstTwo',
    title: 'SwiperTitleTwo',
    animation: <Lottie source={images.Two_Swiper} />,
  },
  {
    key: 's3',
    text: 'SwiperFirstThree',
    title: 'Swipertitlethree',
    animation: <Lottie source={images.Three_Swiper} />,
  },
]
