import React, {useRef, useState} from "react";
import { View, TextInput } from "react-native";

export default function OTPInput ({ length = 4}){
    const [code, setCode] = useState(Array(length).fill(''));
    const inputs = useRef([]);

    const handleChange = (text, index)=> {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if( text && index < length - 1){
            inputs.current[index + 1].focus();
        }
    };

    return (
        <View style = {{ flexDirection: 'row'}}>
            {code.map((value, index)=> (
                <TextInput key={index} ref={(ref) => (inputs.current[index] = ref)} style = {{borderWidth: 1, width: 50, height : 50, textAlign: 'center', margin: 4}} keyboardType="number-pad" maxLength={1} value={value} onChangeText={(text) => handleChange(text, index)}/>
            ))}
            
        </View>
    )
}

// one digit per box