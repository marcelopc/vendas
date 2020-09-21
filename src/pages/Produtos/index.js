import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Searchbar, FAB, List } from 'react-native-paper';
import DB from '../../database';

import Products from '../../components/products';
import Container from '../../components/Container';


const styles = {
    ScrollView:{
     marginBottom: 60,
    },
    imageContainer:{
        alignItems: 'center',
        backgroundColor: "#FFF",
        height: '100%'

	},
    image:{
        width: '100%',
        height: 300
    },
    notfound:{
        color:'#6B8194'
    }
}

export default function Produtos() {

    let [search, setSearch] = useState('');
    let [produtos, setProdutos] = useState('');

    function getProdutos(){
        return DB.GetData().then(db=>{
            const produtos = db.document.produtos;
            setProdutos(produtos);
        }).catch(error=>{

        })
    }

    function onChangeSearch(value){
        setSearch(value)
    }

    function FilterProducts(search){
        if(!search){
			return produtos;
        }

        return produtos.filter(item=> item.codigo === search);
    }

    function Produtos() {
        const produtos = FilterProducts(search);

        if(produtos){
            const productsElements = produtos.map((produto, index) => (
                <Products
                    key={index}
                    codigo={produto.codigo}
                    nome={produto.nome}
                    valorCusto={produto.valorCusto}
                    quantidade={produto.quantidade}
                    valorVenda={produto.valorVenda}
                    lucro={produto.lucro/100}
                    image={produto.image}
                />
            ));
            return <ScrollView style={styles.ScrollView}>{productsElements}</ScrollView>
        }

        return 

    }

    return (
        <Container mount={()=>getProdutos()}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={search}
            />
            <View>
                {produtos &&
                    <List.AccordionGroup>
                        <List.Accordion title="Unitários" id="1">
                            {Produtos()}
                        </List.Accordion>
                        <List.Accordion title="Conjuntos" id="2">
                            <List.Item title="Item 2" />
                        </List.Accordion>
                    </List.AccordionGroup>
                }
                {!produtos &&
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require('../../assets/images/undraw_empty_xct9.png')}/>
                        <Text style={styles.notfound}>Nenhum produto encontrado</Text>
                    </View>
                }


            </View>

        </Container>
    );
}