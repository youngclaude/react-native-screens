import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import Blue from '../Colors/blue'

const HorizontalScroll = () => {
    return (
        <ScrollView pagingEnabled horizontal>
            <View style={styles.outer}>
                <Text style={styles.innerText}>Horizontal Screens ⭐️</Text>
                <Text style={styles.innerText}>  {"\n"}Scroll {'->'} </Text>
            </View>
            <View style={[styles.outer, styles.red]}>
                <Text style={styles.innerText}>Section 2 {"\n"}Scroll {'->'}</Text>
            </View>
            <View style={[styles.outer, styles.green]}>
                <Text style={styles.innerText}> Section 3 {"\n"}{'<-'} Scroll </Text>
            </View>
        </ScrollView>
    )
}

export default HorizontalScroll

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    outer: {
        flex: 1,
        backgroundColor: 'blue',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    innerText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    red: {
        backgroundColor: 'red',
    },
    green: {
        backgroundColor: 'green',
    }

})
