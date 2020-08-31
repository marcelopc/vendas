import React from 'react';
import { View, Text } from 'react-native';
import { FormatarCentavosParaReais } from '../../util/money';
import Products from '../../components/products';
const mocked = {
    produtos: [
        { codigo:'001', name: 'calcinha', valorCusto: 500, quantidade:1, valorVenda: 1000, lucro:0.6 },
        { codigo:'001', name: 'calcinha', valorCusto: 500, quantidade:1, valorVenda: 100000000, lucro:0.6 },
        { codigo:'001', name: 'calcinha', valorCusto: 500, quantidade:1, valorVenda: 1000, lucro:0.6 },

    ]
};

const styles = {
    titles:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
}

export default function Home() {

    function produtos() {
        return mocked.produtos.map((produto, index) => (
            <Products
                key={index}
                produto={produto}
            />

            // <View key={index}>
            //     <Text>{produto.nome} - {FormatarCentavosParaReais(produto.valor)}</Text>
            // </View>
        ));
    }

    return (
        <View>
            <View style={styles.titles}>
                <Text>Produto</Text>
                <Text>Custo</Text>
                <Text>Venda</Text>
                <Text>Quantidade</Text>
            </View>
            {produtos()}
        </View>
    );
}