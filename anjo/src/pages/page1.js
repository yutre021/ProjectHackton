import React  from 'react';
import { View, Button, Text, AppRegistry ,TextInput, StyleSheet, Platform, Image } from 'react-native';

const mainBg = require('./assets/logoHT.png')
const page1 = ({ navigation }) => (
    
   
    <View style={styles.container}>
        <View style={styles.containerimage}>
            <Image
                source={mainBg}
                style={{ width:300 , height: 200, marginBottom: 200 }}/>  
        </View>

        <View>
            <TextInput //Inserçao de texto
                style={{ marginBottom: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => nomeInput = text}
                placeholder="Login"/>
            <TextInput //Inserçao de texto
                style={{ marginBottom: 40, height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => nomeInput = text}
                placeholder="Senha"/>
        </View>
        <View>
            <View style = {styles.botaoLogin}>
                <Button 
                    title="Login"
                    onPress={() => navigation.navigate('Menu')}/>
            </View>
            <Button
                style = {styles.botaoCadastrar}
                title="Cadastrar"
                onPress={() => navigation.navigate('Cadastro')}/>
        </View>
    </View>
    
);

// this.props.navigation.nagite('NomeDatela')

 page1.navigationOptions = {
     title : '                           Bem Vindo', 
 }


const styles = StyleSheet.create({

    container:{
        flex: 1,//Tela Inteira 
        backgroundColor: 'skyblue',
        padding: 30,
        color: 'blue',
        justifyContent: 'flex-end'//
    },
    containerimage: {
        justifyContent: 'center',
        alignItems: 'center'
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