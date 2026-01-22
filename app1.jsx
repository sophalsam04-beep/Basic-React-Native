import React, {useState} from "react";
import { View, TextInput, StyleSheet} from 'react-native';

export default function App(){
    const [text, setText] = useState('');

    return (
        <View style = {styles.container}>
            <TextInput style = {styles.textArea} multiline numberOfLines={4} value={text} onChangeText={setText} placeholder="Enter your message" textAlignVertical="top" />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    textArea: {
        height: 120,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
    }
})