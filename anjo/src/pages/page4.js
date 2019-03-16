// src/Page3.js

import React from 'react';
import { View, Button, Text , StyleSheet} from 'react-native';

const Page4 = () => (
  <View style={styles.container}>
    <Text>Página 4</Text>
    <Button
    title="Cadastrar"
    onPress={() => navigation.navigate('About')}
    />
  </View>
);

// Page4.navigationOptions = {
//   title: 'Info',
// }
const styles = StyleSheet.create({

    container:{
        
    }
});

export default Page4;