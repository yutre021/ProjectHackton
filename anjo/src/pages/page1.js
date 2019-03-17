import React  from 'react';
import { View, Button,Text, AppRegistry ,TextInput, StyleSheet, Platform, Image, AsyncStorage } from 'react-native';
import {ToastAndroid} from 'react-native';

var nomeInput = '';
var senhaInput = '';

const mainBg = require('./assets/logoHT.png')

const retrieveData = async () => {
    try {
        
        ToastAndroid.show(`login: }`, ToastAndroid.SHORT);
        const login = await AsyncStorage.getItem('@Login');
        const senha = await AsyncStorage.getItem('@Senha');
        ToastAndroid.show(`login: ${login}`, ToastAndroid.SHORT);
        ToastAndroid.show(`pass: ${senha}`, ToastAndroid.SHORT);
        if (login == a && senha == b) {
        // We have data!!
        navigation.navigate('Menu')
        }
    } catch (error) {
        // Error retrieving data
    }
};

const page1 = ({ navigation }) => (
    
   
    <View style={styles.container}>
        <View style={styles.containerimage}>
            <Image
                source={mainBg}
                style={{ width:430  , height: 400,  marginBottom: 50 }}/>  
        </View>

        <View>
            <TextInput //Inserçao de texto
                style={{ marginBottom: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => nomeInput = text}
                placeholder="Login"/>
            <TextInput //Inserçao de texto
                secureTextEntry={true} style={{ marginBottom: 40, height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => senhaInput = text}
                placeholder="Senha"/>
        </View>
        <View>
            <View style = {styles.botaoLogin}>
                <Button  
                    title="Login"
                    onPress={() => {
                        const retrieveData = async () => {
                            try {
                                
                                const login = await AsyncStorage.getItem('@Login');
                                const senha = await AsyncStorage.getItem('@Senha');
                                ToastAndroid.show(`login: ${login}`, ToastAndroid.SHORT);
                                ToastAndroid.show(`pass: ${senha}`, ToastAndroid.SHORT);
                                if (login == nomeInput && senha == senhaInput) {
                                // We have data!!
                                navigation.navigate('Menu')
                                }
                            } catch (error) {
                                // Error retrieving data
                            }
                        };
                        retrieveData()
                    }}/>
            </View>
            <Button
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