// src/Page5.js

import React from 'react';
import { View, Button, Text , StyleSheet} from 'react-native';

const Page5 = () => (
  <View style= {styles.container}>
    <Text>Alerta</Text>
  </View>
  
);

// Page5.navigationOptions = {
//   title: 'Info',
// }
const styles = StyleSheet.create({

    container:{
        color: "red"
    }
});

export default Page5;