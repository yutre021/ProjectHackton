// src/Page3.js

import React from 'react';
import { View, Button, Text , StyleSheet} from 'react-native';

const Page4 = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Página 4</Text>
    <Button
    title="Cadastrar"
    onPress={() => navigation.navigate('About')}
    />
  </View>
);
const retrieveData = async () => {
  try {
      
    
      ToastAndroid.show(`login: }`, ToastAndroid.SHORT);
      const nome1Input = await AsyncStorage.getItem('@N1');
      const nome2Input = await AsyncStorage.getItem('@N2');
      const tel1Input = await AsyncStorage.getItem('@T1');
      const tel2Input = await AsyncStorage.getItem('@T2');
     
      <Text> O Nome do anjo é</Text>
      
  } catch (error) {
      // Error retrieving data
  }
};

// Page4.navigationOptions = {
//   title: 'Info',
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

export default Page4;