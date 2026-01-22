// styling in react native -- > js
import { StyleSheet, Text, View } from "react-native";

export default 
function app1(){
    return (
        <View style = {StyleSheet.container}>
            <Text style = {StyleSheet.text}>Styled text</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: "center",
        alignItems : "center",
    },

    text : {
        fontSize : 20,
        color : 'Blue',
    }
});