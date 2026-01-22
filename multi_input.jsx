import React, {useState} from "react";
import { View, TextInput, StyleSheet} from 'react-native';

export default function Form(){
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });


    const handleChange = (key, value)=> {
        setForm({...form, [key] : value});
    };


    return (
        <View style={styles.container}>
                <TextInput
        placeholder="Name"
        value={form.name}
        onChangeText={(v) => handleChange('name', v)}
        style={styles.input}
        />

            <TextInput placeholder="Email" value={form.email} onChangeText={(v) => handleChange('email', v)} style = {styles.input} keyboardType="email-address"/>
            <TextInput placeholder="Password" value={form.password} onChangeText={(v)=> handleChange('password', v)} style={styles.input} secureTextEntry/>
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 12,
        borderRadius: 6,
        marginBottom: 10,
    }
});