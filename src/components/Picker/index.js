import React, { useRef, useState, useEffect } from 'react';
import { View } from 'react-native';

import { Picker } from '@react-native-community/picker';

const style = {
    inputs: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        borderRadius: 4,
        color: 'black',
        borderStyle: 'solid',
    },

}
export default function Products(props) {

    function pickerItem() {
        return props.items.map((item, index) => <Picker.Item key={index} label={item.label} value={item.value} />)
    }

    return (
        <View style={style.inputs}>
            <Picker
                selectedValue={props.value}
                onValueChange={(itemValue, itemIndex) => props.onValueChange(itemValue, itemIndex)}
                >
                {pickerItem()}
            </Picker>
        </View>
    );
}