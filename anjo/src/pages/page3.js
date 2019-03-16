// src/Page3.js

import React from 'react';
import { View, Button, Text , StyleSheet} from 'react-native';

const Page3 = () => (
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
        
    }
});

export default Page3;