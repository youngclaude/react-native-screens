import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Red from './red'
import Blue from './blue'
import Green from './green'

const Colors = () => {
    return (
        <View style={styles.container}>
            <Red />
            <Blue />
            <Green />
        </View>
    )
}

export default Colors

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100,
    },
  });