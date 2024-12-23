import React, { useMemo } from 'react'
import { Modal, View, Pressable, Image } from 'react-native'
import { ModalStyle } from '../../styles'
import { useTheme } from '@react-navigation/native'
import images from '@/images'

function ModalComponent({
  children,
  modalVisible,
  setModalVisible,
  close,
  ModalViewStyle,
  modalbuttonClose,
}) {
  const { colors } = useTheme()
  const styles = useMemo(() => ModalStyle(colors), [colors])
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}
    >
      <View style={styles.ModalCenteredView}>
        <View style={[styles.ModalView, { ...ModalViewStyle }]}>
          <Pressable style={styles.CloseView} onPress={() => (close ? close() : null)}>
            {close ? (
              <Pressable
                style={[styles.ModalButtonClose, { ...modalbuttonClose }]}
                onPress={() => close()}
              >
                <Image resizeMode="cover" source={images.close} />
              </Pressable>
            ) : null}
            {children}
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default ModalComponent
