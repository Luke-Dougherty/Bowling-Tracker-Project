import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

import CustomInput from '../../Componets/CustomInput/CustomInput'
import CustomButton from '../../Componets/CustomButton/CustomButton'

const RegisterScreen = () => {

    const [email, setEmail] = useState('')
    const [confirmationCode, setConfirmationCode] = useState('')

    const onConfirmEmailPressed = () => {
        console.warn('onConfirmEmailPressed')
    }
    
    const onResendPressed = () => {
        console.warn('onResendPressed')
    }

    const onSignInPressed = () => {
        console.warn('onSignInPressed')
    }

  return (
    <View style={styles.root}>


        <Text style={styles.labeText}>Email: </Text>
        <CustomInput placeHolder={'Email:'} value={email} setValue={setEmail} secureTextEntry={false} />

        <Text style={styles.labeText}>Confirmation Code: </Text>
        <CustomInput placeHolder={'Confirmation Code'} value={confirmationCode} setValue={setConfirmationCode} secureTextEntry={false} />
        

        <CustomButton text={'Confirm Email'} onPress={onConfirmEmailPressed} type={'PRIMARY'} />
        <CustomButton text={'Resend Code'} onPress={onResendPressed} type={'SECONDARY'} />
        <CustomButton text={'Confirm Email'} onPress={onSignInPressed} type={'SECONDARY'} />
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 50,
        backgroundColor: 'white',
    },
    labeText: {
        fontWeight: 'bold',
        alignItems: 'center',
        padding: 2.5,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: 'blue',

    },
});

export default RegisterScreen

