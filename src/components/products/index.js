import React from 'react';
import { View, Text, Image } from 'react-native';
import { FormatarCentavosParaReais } from '../../util/money';
import { Card } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// https://economia.awesomeapi.com.br/json/all/GBP-BRL COTAÇÃO DA LIBRA
const styles={
    card:{
        marginTop: 10
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    subContent:{
        flexDirection: 'row',
    },
    rightContent:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    contentImage:{
		width: 60,
        height: 60,
        borderRadius: 4,
        marginRight: 5
    },
    image:{
		width: 60,
        height: 60,
    },


}
export default function Products(props) {


    return (
        <Card style={styles.card}>
            <Card.Content style={styles.content}>
                <View style={styles.subContent}>
                    <View style={styles.contentImage}>
                        <Image  style={styles.image} source={{uri:props.image}} resizeMode='cover'/>
                    </View>
                    <View >
                        <Text>{props.codigo} - {props.nome}</Text>
                        <Text>Custo: {FormatarCentavosParaReais(props.valorCusto)}</Text>
                        <Text>Quantidade: {props.quantidade}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <View style={styles.rightContent}>
                            <Text>{props.lucro*100}%</Text>
                            <View>
                                <Icon name="trending-up" size={23} color="green" />
                            </View>
                        </View>
                        <Text>{FormatarCentavosParaReais(props.valorVenda)}</Text>
                    </View>
                </View>
            </Card.Content>
        </Card>
    );
}