import {SafeAreaView, StyleSheet, Text} from 'react-native';

import LoginScreen from './src/screens/loginScreen/LoginScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
     <LoginScreen />
     {/* <Text>Testing123423</Text> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;