import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

import CustomInput from '../../Componets/CustomInput/CustomInput'
import CustomButton from '../../Componets/CustomButton/CustomButton'

const RegisterScreen = () => {

    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordConf] = useState('')
    const [phoneNum, setPhoneNum] = useState('')

    const onCreateAccountPressed = () => {
        console.warn('onCreateAccountPressed')
    }
    
    const onTouPressed = () => {
        console.warn('onTouPressed')
    }

    const onppPressed = () => {
        console.warn('onppPressed')
    }

  return (
    <View style={styles.root}>

        <Text style={styles.labeText}>Name: </Text>
        <CustomInput placeHolder={'Name'} value={Name} setValue={setName} secureTextEntry={false} />

        <Text style={styles.labeText}>Email: </Text>
        <CustomInput placeHolder={'Email:'} value={email} setValue={setEmail} secureTextEntry={false} />

        <Text style={styles.labeText}>Password: </Text>
        <CustomInput placeHolder={'Password:'} value={password} setValue={setPassword} secureTextEntry={false} />

        <Text style={styles.labeText}>Password: </Text>
        <CustomInput placeHolder={'Confirm Password:'} value={passwordConf} setValue={setPasswordConf} secureTextEntry={false} />

        <Text style={styles.labeText}>Phone Number: </Text>
        <CustomInput placeHolder={'Phone Number'} value={phoneNum} setValue={setPhoneNum} secureTextEntry={false} />

        <CustomButton text={'Create Account'} onPress={onCreateAccountPressed} type={'SECONDARY'} />

        <Text style={styles.text }> By registering, you confirm to that you accept our 
        <Text style={styles.link} onPress={onTouPressed}> Terms of Use</Text> and 
        <Text style={styles.link} onPress={onppPressed}> Privacy Policy.</Text> </Text>
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

