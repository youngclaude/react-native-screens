import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Red() {
    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
})