import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { InputField, InputWrapper } from '../styles/AddPost';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const AddPostScreen = () => {
    return (
        <View style={styles.container}>
            <InputWrapper>
                <InputField 
                    placeholder="¿Qué estas buscando?"
                    multiline
                    numberOfLines={4}
                />
            </InputWrapper>
            <ActionButton buttonColor="#2e64e5">
                <ActionButton.Item
                    buttonColor="#9b59b6"
                    title="Take Photo"
                    onPress={()=>alert("Take Photo")}
                >
                <Icon name="camera-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#3498db"
                    title="Choose Photo"
                    onPress={()=>alert("Please select")}
                >
                <Icon name="md-images-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </View>
    )
}

export default AddPostScreen


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }
})
