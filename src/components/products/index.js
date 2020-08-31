import React from 'react';
import { View, Text } from 'react-native';
import { FormatarCentavosParaReais } from '../../util/money';
import { Card } from 'react-native-paper';

const styles={
    card:{
        marginTop: 10
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

}
export default function Products(props) {


    return (
        <Card style={styles.card}>
            <Card.Content style={styles.content}>

                <View>
                    <Text >{props.produto.codigo}</Text>
                    <Text>{props.produto.name}</Text>
                </View>

                <View>
                    <Text >{FormatarCentavosParaReais(props.produto.valorCusto)}</Text>
                </View>

                <View>
                    <Text >{FormatarCentavosParaReais(props.produto.valorVenda)}</Text>
                    <Text>{props.produto.lucro}</Text>
                </View>

                <View>
                    <Text >{props.produto.quantidade}</Text>
                </View>

            </Card.Content>
        </Card>
    );
}