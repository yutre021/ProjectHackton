// src/Page2.js

import React from 'react';
import { View, Button, Text , StyleSheet} from 'react-native';

const Page2 = () => (
  <View style={styles.container}>
    <Text>Página 2</Text>
    <Button
    title="Cadastrar"
    onPress={() => navigation.navigate('Menu')}
    />
  </View>
);

//Page2.navigationOptions = {
  //title: 'Menu',
//}
const styles = StyleSheet.create({

    container:{
        
    }
});

export default Page2;