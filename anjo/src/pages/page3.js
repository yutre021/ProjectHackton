// src/Page3.js

import React from 'react';
import SendSMS from 'react-native-sms-x';

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ToastAndroid } from 'react-native';

const Page3 = ({ navigation }) => (
  <View style={styles.container}>
    <View >
      <Text>Edit</Text>
      <TouchableOpacity style={styles.alerta1} onPress={() => {
        navigation.navigate('CadAnjos')


      }}>
      </TouchableOpacity>

    </View >
    <View>
      <Text> aaaaaaaaa </Text>
      <TouchableOpacity style={styles.alerta} onPress={() => {
        SendSMS.send(123, "+5535998006748", "Estamos com você!Tenho acerteza de tomar a decissâo certa.", (msg) => { alert(msg) });

        ToastAndroid.show('enviado', ToastAndroid.SHORT);
      }}>
      </TouchableOpacity>
    </View>

  </View>
);

Page3.navigationOptions = {
  title: '                  Menu',
}
const styles = StyleSheet.create({

  container: {
    flex: 1,//Tela Inteira 
    backgroundColor: 'skyblue',
    padding: 30,
    color: 'blue',
    justifyContent: 'flex-end',
  },
  alerta: { 
    width: 30,
    height: 30,
    backgroundColor: "gray",
    borderRadius: 30
  },
  alerta1: {
    width: 40,
    height: 40,
    backgroundColor: "green",
    borderRadius: 30

  }
});

export default Page3;