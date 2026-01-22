import React, {useState} from "react";
import { View, TextInput, Pressable, Text } from "react-native";

export default function DynamicInput(){
    const [inputs, setInputs] = useState(['']);

    const addInput = () => setInputs([...inputs, '']);
    const removeInput = (index) => setInputs(inputs.filter((_, i)=> i !== index));

    const updateInput = (text, index) => {
        const newInputs = [...inputs];
        newInputs[index] = text;
        console.log("Display : "+newInputs)
    };


    return (
        <View>
            {inputs.map((value, index)=> {
                <View key={index}>
                    <TextInput style = {{borderWidth: 1, marginBottom: 6}} value={value} onChangeText={(text)=> updateInput(text, index)} placeholder={'input : ${input + 1}'}/>
                        {inputs.length > 1 && (<Pressable onPress={()=> removeInput(index)}><Text> Remove</Text></Pressable>)}
                </View>
            })};

            <Pressable onPress={addInput}>
                <Text> Add Input</Text>
            </Pressable>
        </View>
    )
}


