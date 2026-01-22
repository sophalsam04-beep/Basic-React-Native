import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>

      <Text>Hello</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container : {
      flex: "center",
      alignItems : "center",
      alignContent: "center",
    }
});