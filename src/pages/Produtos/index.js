import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Searchbar, FAB, List } from 'react-native-paper';
import DB from '../../database';

import Products from '../../components/products';
import Container from '../../components/Container';


const styles = {
    ScrollView: {
        height: 300,
    },
    imageContainer: {
        alignItems: 'center',
        backgroundColor: "#FFF",
        height: '100%'

    },
    image: {
        width: '100%',
        height: 300
    },
    notfound: {
        color: '#6B8194'
    },
    accordion: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 5,
        marginTop: 5
    }
}

export default function Produtos() {

    let [search, setSearch] = useState('');
    let [produtos, setProdutos] = useState([]);

    function getProdutos() {
        return DB.GetData().then(db => {
            const produtos = db.document.produtos;
            console.log('PRODUTOS')
            setProdutos(produtos);
        }).catch(error => {
            console.log(error)

        })
    }

    function onChangeSearch(value) {
        setSearch(value)
    }

    function FilterProducts(search) {
        if (!search) {
            return produtos;
        }

        return produtos.filter(item => item.codigo === search);
    }

    function Produtos() {
        const produtos = FilterProducts(search);
        const productsElements = produtos.map((produto, index) => (
            <Products
                key={index}
                codigo={produto.codigo}
                nome={produto.nome}
                valorCusto={produto.valorCusto}
                quantidade={produto.quantidade}
                valorVenda={produto.valorVenda}
                lucro={produto.lucro / 100}
                image={produto.image}
            />
        ));

        return <List.Accordion title="Unitários" id="1" style={styles.accordion}>
            <ScrollView style={styles.ScrollView}>{productsElements}</ScrollView>
        </List.Accordion>

    }

    function conjuntos() {
        return <List.Accordion title="Conjuntos" id="2" style={styles.accordion}>
            <List.Item title="Item 2" />
        </List.Accordion>
    }


    function renderAccordion() {console.log('???????')

        if (produtos.length) {
            return (
                <List.AccordionGroup style={styles.accordionGroup}>
                    {Produtos()}
                    {conjuntos()}
                </List.AccordionGroup>
            );
        }

        return (
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/images/undraw_empty_xct9.png')} />
                <Text style={styles.notfound}>Nenhum produto encontrado</Text>
            </View>
        );
    }

    return (
        <Container mount={() => getProdutos()}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={search}
            />
            {renderAccordion()}
        </Container>
    );
}