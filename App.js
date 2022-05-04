import {SafeAreaView, StyleSheet, Text} from 'react-native';
import loginScreen from './src/screens/loginScreen/loginScreen';



const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <loginScreen/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;