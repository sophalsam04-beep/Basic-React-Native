import React, {useState} from "react";
import { View, TextInput, Text, Pressable } from "react-native";

export default function TagInput(){
    const [text, setText] = useState('');
    const [tags, setTags] = useState([]);
    
    const addTag = () => {
        if(!text.trim()) return;
        setTags([...tags, text]);
        setText('');
    };

    return (
        <View>
            <View style = {{ flexDirection: 'row', flexWrap: 'wrap'}}>
                {tags.map((tag, i)=> (
                    <Pressable key={i}>
                        <Text style = {{padding: 6, backgroundColor: '#ddd', margin: 4}}>
                            {tag}
                        </Text>
                    </Pressable>
                ))}
            </View>
            <TextInput placeholder="Add tag" value={text} onChangeText={setText} onSubmitEditing={addTag}/>
        </View>
    )
}