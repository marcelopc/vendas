import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import Form from '../../components/Form';
import DB from '../../database';
const styles={};

export default function Products(props) {

    function saveDataBase(values){
        DB.SaveData(values)
    }

    function FormResponse(values) {
        DB.GetData().then(db=>{
            const database = db.document;
            database.produtos.push(values);
            saveDataBase(database);
        }).catch(error=>{
            const produtos = [values];
            saveDataBase({produtos})
        })
    }

    return (  <Form onSubmit={FormResponse}/>  );
}