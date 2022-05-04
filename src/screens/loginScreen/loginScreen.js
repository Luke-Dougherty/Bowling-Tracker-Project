import React from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/BowlingLogo.png';



const LoginScreen = () => {
    const {height} = useWindowDimensions();
    return(
        // <Text>TESTING</Text>
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, {height: height * .3}]} resizeMode="contain"/>
        </View>
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