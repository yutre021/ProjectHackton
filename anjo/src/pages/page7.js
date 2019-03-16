// Srs page7
import React from 'react';
import { View, Button, Text, StyleSheet, TextInput } from 'react-native';
import { ToastAndroid } from 'react-native';

var telefoneInput
var nomeInput

/* var contato1 = { "nome": "Ensley" }
var contato2 = { "nome": "Lucas" }
var contato3 = { "nome": "Teste" }
var contato4 = { "nome": "Renzo" }
var contato5 = { "nome": "Gui" }
contatos.push(contato1)
contatos.push(contato2)
contatos.push(contato3)
contatos.push(contato4)
contatos.push(contato5) */

inicio = 0

lista = []

lista.push({ "nome": "Lucas" })
lista.push({ "nome": "Fer" })

const Page7 = ({ navigation }) => (


    <View>
        {/*   {contatos.map(function (contato) {
            return (
                <Text style={{ fontSize: 20 }}>{contato.nome}</Text>
            )
        })
        } */}

        <View style={{ flexDirection: 'row' }}>
            <Text>
                Nome
            </Text>
            <Text style={{ marginLeft: 40 }} >
                Telefone
            </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
            {lista.map(function (item) {
                return (
        
                        <View style={{ flexDirection: 'column'}}>
                            <TextInput
                                style={{ marginTop: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={(text) => nomeInput = text}
                                placeholder="Digite o nome do anjo: "
                            />

                            <TextInput
                                style={{ marginTop: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={(text) => telefoneInput = text}
                                placeholder="Digite o telefone: "
                            />

                    </View>
                )
            })


            }

        </View>


    </View>


);

export default Page7;