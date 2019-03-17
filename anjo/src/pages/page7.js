// Srs page7
import React from 'react';
import { View, Button, Text, StyleSheet, TextInput ,AsyncStorage} from 'react-native';
import { ToastAndroid } from 'react-native';
import SendSMS from 'react-native-sms-x';


var nome1Input = "";
var nome2Input = "";
var tel1Input = "";
var tel2Input = "";

const storeData = async () => {
    try {
        await AsyncStorage.setItem('@N1', nome1Input);
        await AsyncStorage.setItem('@N2', nome2Input);
        await AsyncStorage.setItem('@T1', tel1Input);
        await AsyncStorage.setItem('@T2', tel2Input);

    } catch (error) {
        // Error saving data
    }
};
const Page7 = ({ navigation }) => (


    <View style={styles.container}>
        {/*   {contatos.map(function (contato) {
            return (
                <Text style={{ fontSize: 20 }}>{contato.nome}</Text>
            )
        })
        } */}

        <View style={{ flexDirection: 'row' }}>
            <Text>
                Dados dos Anjos:
            </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>


            <View style={{ flexDirection: 'column' }}>
                <TextInput
                    style={{ marginTop: 10, height: 40, borderColor: 'gray', borderWidth: 3 }}
                    onChangeText={(text) => nome1Input = text}
                    placeholder="Digite o nome do anjo: "
                />

                <TextInput
                    style={{ marginTop: 10, height: 40, borderColor: 'gray', borderWidth: 3 }}
                    onChangeText={(text) => tel1Input = text}
                    placeholder="Digite o telefone: "
                />

                <TextInput
                    style={{ marginTop: 10, height: 40, borderColor: 'gray', borderWidth: 3 }}
                    onChangeText={(text) => nome2Input = text}
                    placeholder="Digite o nome do anjo: "
                />

                <TextInput
                    style={{ marginTop: 10, height: 40, borderColor: 'gray', borderWidth: 3 }}
                    onChangeText={(text) => tel2Input = text}
                    placeholder="Digite o telefone: "
                />

            </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 36 }}>
            <Button
                title="Cadastrar"
                onPress={() => {
                    storeData();
                    navigation.navigate('Menu')
                }} />
        </View>
    </View>


);

const styles = StyleSheet.create({

    container: {
        flex: 1,//Tela Inteira 
        backgroundColor: 'skyblue',
        padding: 30,
        color: 'blue',
        justifyContent: 'flex-start',
    },
    alerta: {
        width: 60,
        height: 60,
        backgroundColor: "gray",
        borderRadius: 30
    }
});

export default Page7;