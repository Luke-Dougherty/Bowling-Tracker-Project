import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';


import Logo from '../../../assets/images/BowlingLogo.png';
import CustomInput from '../../Componets/CustomInput/CustomInput';
import CustomButton from '../../Componets/CustomButton/CustomButton';

const LoginScreen = () => {
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSignInPressed = () => {
        console.warn('onSignInPressed');
    }

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    }

    const onRegisterAccountPressed = () => {
        console.warn('onRegisterAccountPressed')
    }

    return(
        // <Text>TESTING</Text>
        <ScrollView>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, {height: height * .3}]} resizeMode="contain"/>
                <CustomInput placeHolder="Username" value={username} setValue={setUsername} secureTextEntry={false}/>
                <CustomInput placeHolder="Password" value={password} setValue={setPassword} secureTextEntry={false}/>{/* //turn to true for actual use */}
                <CustomButton text={'Sign In'} onPress={onSignInPressed} type={'PRIMARY'} />
                <CustomButton text={'Forgot Password'} onPress={onForgotPasswordPressed} type={'SECONDARY'} />
                <CustomButton text={'Register for an Account'} onPress={onRegisterAccountPressed} type={'SECONDARY'} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 300
    },
});

export default LoginScreen