import React  from 'react';

import { View, Button, Text, AppRegistry ,TextInput, StyleSheet, Platform } from 'react-native';

const page1 = ({ navigation }) => (

    
    <View style={styles.container}>
    <View>
        <Text style= {styles.editmenu}>Anjo</Text>
        <View style = {styles.botaoLogin}>
        <Button 
        
        title="Login"
        onPress={() => navigation.navigate('Menu')}
    />
    </View>
    <Button style = {styles.botaoCadastrar}
    
    title="Cadastrar"
    onPress={() => navigation.navigate('Cadastro')}
    />
    </View>
    </View>
    
);

// this.props.navigation.nagite('NomeDatela')

 page1.navigationOptions = {
     title : '                       Bem Vindo',
 }


const styles = StyleSheet.create({

    container:{
        flex: 1,//Tela Inteira 
        backgroundColor: 'skyblue',
        padding: 30,
        color: 'blue',
        justifyContent: 'flex-end'//
    },
    editmenu:{
        color: 'red'
    },
    botaoLogin:
    {
        marginBottom: 10
    },
    botaoCadastrar: {
        marginTop: 30

    }
});



export default page1;