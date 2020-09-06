import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = {
    titles:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
}

export default function Home() {
    return (
        <View>
            <View style={styles.titles}>
                <Text>HOME</Text>

            </View>
        </View>
    );
}