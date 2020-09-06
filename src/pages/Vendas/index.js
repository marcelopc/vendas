import React from 'react';
import { View, Text } from 'react-native';

const styles = {
    titles:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
}

export default function Vendas() {
    return (
        <View>
            <View style={styles.titles}>
                <Text>Vendas</Text>
            </View>
        </View>
    );
}