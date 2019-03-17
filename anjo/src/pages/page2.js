// src/Page2.js

import React from 'react';
import { View, Button, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {ToastAndroid} from 'react-native';

var nomeInput = "";
var cpfInput = "";
var DTnascInput = "";
var EndInput = "";
var usuarioInput = "";
var senha1Input = "";
var senha2Input = "";


const Page2 = ({ navigation }) => (
  
  <View style={styles.container}>
  <ScrollView>
    <Text>Dados da Usuária: </Text>
    <TextInput //Inserçao de texto
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(text) => nomeInput = text}
      placeholder="Digite seu nome"

    />
    <TextInput //CPF
      style={{ marginTop: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(text) => cpdInput = text}
      placeholder="Digite seu C.P.F"
    />
    <TextInput // Nascimento
      style={{ marginTop: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(text) => DTnascInput = text}
      placeholder="Digite sua data de nascimento"
    />
    <TextInput // Nascimento
      style={{ marginTop: 10, marginBottom: 40, height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(text) => DTnascInput = text}
      placeholder="Digite o Endereço Atual: "
    />

    <Text>Dados de login: </Text>
    <TextInput // Nascimento
        style={{marginTop:10 ,height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) =>usuarioInput = text}
        placeholder = "Digite o nome de Usuário:"
        />
         <TextInput // Nascimento
       secureTextEntry={true}  style={{marginTop:10 ,height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) =>senha1Input = text}
        placeholder = "Digite uma senha:"
        />
         <TextInput // Nascimento
        secureTextEntry={true} style={{marginTop:10 ,height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) =>senha2Input = text}
        placeholder = "Digite a senha novamente:"
        />
      
          
          

      </ScrollView>
    <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 36 }}>


      <Button
        title="Cadastrar"
        onPress={() => { 
          if(senha1Input==senha2Input && senha1Input != '' && senha2Input != '')
           {
            ToastAndroid.show( 'Dados preenchidos com sucesso!!!', ToastAndroid.SHORT);


            navigation.navigate('CadAnjos')
            
            
           }
           else
    
           ToastAndroid.show( 'Senhas não conferem. Tente novamente!!!', ToastAndroid.SHORT);
          

        }}//chamar a funcao de salvar as variaveis
      />
    </View>
  </View>

);



//Page2.navigationOptions = {
//title: 'Menu',
//}
const styles = StyleSheet.create({

  container: {
    flex: 1,//Tela Inteira 
    backgroundColor: 'skyblue',
    padding: 30,
    color: 'blue',
    flexDirection: 'column'

  },
  container2: {

    backgroundColor: 'skyblue',
    padding: 30,
    color: 'blue',
    marginBottom: 10

  }
});

export default Page2;