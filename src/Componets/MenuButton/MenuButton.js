import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const MenuButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
        <Text style={[styles.box, styles.text]}>Menu</Text>
    </Pressable>
    
  )
}

export default MenuButton

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        
        alignItems: 'left',
        paddingHorizontal: 25,
        paddingVertical: 25,
    },
    box: {
        height: 40,
        width: 40,
        backgroundColor: 'black',
    },
    text: {
        color: 'blue',
        fontWeight: 'bold', 

    },
})