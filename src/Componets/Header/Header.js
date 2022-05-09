import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import MenuButton from '../MenuButton/MenuButton'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {/* <MenuButton/> */}
      <View >
        <MenuButton style={styles.boxLocation}/>
        <Text style={styles.headerText}>Header</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'gray',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
    alignItems: 'center',
    flex: 1,
  },
  boxLocation: {
    alignItems: 'left',
    flex: 1,
  },
});

export default Header