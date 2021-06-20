import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'

const MessagesScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Messages Screen</Text>
        </View>
    )
}

export default MessagesScreen


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333'
    }
})
