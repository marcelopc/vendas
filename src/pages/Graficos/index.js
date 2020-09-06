import React from 'react';
import { View, Text } from 'react-native';

const styles = {
    titles:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
}

export default function Graficos() {
    return (
        <View>
            <View style={styles.titles}>
                <Text>Graficos</Text>
            </View>
        </View>
    );
}