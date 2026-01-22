import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';

export default function App(){
    const [value, setValue] = useState('');


    return (
        <View style = {styles.container}>
            <Picker selectedValue = {value} onValueChange = {(itemValue) => setValue(itemValue)}>
                <Picker.Item label = "Select an option" value = ""/>
                <Picker.Item label="Apple" value="apple"/>
                <Picker.Item label="Banana" value="banana"/>
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 6,
    }
});