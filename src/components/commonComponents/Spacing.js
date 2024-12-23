import React, { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

// eslint-disable-next-line react/prop-types
function Spacing({ space = 10, horizontal = false, backgroundColor = 'transparent' }) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        spacerStyle: {
          [horizontal ? 'width' : 'height']: space,
          backgroundColor: backgroundColor || 'transparent',
        },
      }),
    [horizontal, space, backgroundColor],
  )

  return <View style={[styles.spacerStyle]} />
}

export default Spacing
