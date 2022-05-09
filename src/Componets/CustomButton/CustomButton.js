import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = 'PRIMARY'}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,

    },
    container_PRIMARY: {
        backgroundColor: 'black',
    },
    container_SECONDARY: {
        backgroundColor: 'grey',
    },
    container_TIERTIARY: {

    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
    text_PRIMARY: {
        color: 'white',
    },
    text_SECONDARY: {
        color: 'white'
    },
    text_TIERTIARY: {

    },
});