import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeHolder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeHolder} 
      secureTextEntry={secureTextEntry}
      style={styles.input}/>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    fontSize: 15,
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '7%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
    marginBottom: 5,
  },
})