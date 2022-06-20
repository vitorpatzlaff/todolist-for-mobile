import React from 'react'

import {
  Pressable,
  Text,
  StyleSheet
} from 'react-native'

const VitorButton = ({ onPressFunction, title, color, style }) => {
  return (
    <Pressable
      onPress={onPressFunction}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      android_ripple={{ color: '#00000044' }}
      style={({ pressed }) => [
        { backgroundColor: color },
        styles.button,
        style
      ]}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>

  )
}

const styles = StyleSheet.create({
  text:{
    color: '#fff',
    fontSize: 20,
    margin: 10,
    textAlign: 'center'
  },

  button:{
    width: 150,
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#555',
    marginBottom: 20
  }
})

export default VitorButton
