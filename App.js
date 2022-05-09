import {SafeAreaView, StyleSheet, Text} from 'react-native';

import LoginScreen from './src/screens/loginScreen/LoginScreen';
import RegisterScreen from './src/screens/registerScreen/RegisterScreen';
import ConfirmEmail from './src/screens/confirmEmail/ConfirmEmail';
import Header from './src/Componets/Header/Header';
import MenuButton from './src/Componets/MenuButton/MenuButton';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
     {/* <LoginScreen /> */}
     {/* <RegisterScreen /> */}
     {/* <ConfirmEmail/> */}
     {/* <Header/>     */}
    {/* <MenuButton/> */}
     </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default App;