// state & event in js
import { useState } from "react";
import { Text, Button, View } from "react-native";

export default
function App2(){
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>Count : {count}</Text>
            <Button title="Increase"onPress={()=> setCount(count+ 1)}></Button>
        </View>
    );
};