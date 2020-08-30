import React from 'react';
import { View, Text } from 'react-native';
import { FormatarCentavosParaReais } from '../../util/money';

const mocked = {
    produtos:[
        { nome: 'calcinha1', valor: 500 },
        { nome: 'calcinha2', valor: 500 },
        { nome: 'calcinha3', valor: 500 },
        { nome: 'calcinha4', valor: 500 },
        { nome: 'calcinha5', valor: 500 },
        { nome: 'calcinha6', valor: 500 },
        { nome: 'calcinha7', valor: 500 },
        { nome: 'calcinha8', valor: 500 },
    ]
};

export default function Home() {

    function produtos(){
    return mocked.produtos.map((produto, index) => (
        <View key={index}>
            <Text>{produto.nome} - {FormatarCentavosParaReais(produto.valor)}</Text>
        </View>
    ));
}

return (
    <View>
        {produtos()}
    </View>
    );
}