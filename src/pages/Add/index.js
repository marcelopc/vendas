import React from 'react';
import { View } from 'react-native';

import Form from '../../components/Form';

const styles = {
 
}

export default function Add() {
    function FormResponse(values){
        console.log(values)
    }
    return (
        <View>
            <Form onSubmit={FormResponse}/>
        </View>
    );
}