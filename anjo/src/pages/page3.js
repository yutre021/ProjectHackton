// src/Page3.js

import React from 'react';
import { View, Button, Text , StyleSheet} from 'react-native';

const Page3 = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Página 3 (Menu)</Text>
    <Button
    title="Alerta"
    onPress={() => navigation.navigate('Alerta')}
    />
  </View>
);

// Page3.navigationOptions = {
//   title: 'Menu',
// }
const styles = StyleSheet.create({

    container:{
          flex: 1,//Tela Inteira 
        backgroundColor: 'skyblue',
        padding: 30,
        color: 'blue',
        justifyContent: 'flex-end'//
    }
});

export default Page3;