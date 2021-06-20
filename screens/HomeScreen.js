import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';

const HomeScreen = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}>Welcome</Text>
            <FormButton buttonTitle='Logout' onPress={() => {}} />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
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