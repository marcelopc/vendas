import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Searchbar, FAB } from 'react-native-paper';

import Products from '../../components/products';

const mocked = {
    produtos: [
        { codigo:'001', nome: 'calcinha', valorCusto: 500, quantidade:1, valorVenda: 1000, lucro:0.6, image:'https://static.wixstatic.com/media/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.png/v1/fill/w_492,h_781,fp_0.50_0.50,q_95/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.webp' },
        { codigo:'002', nome: 'calcinha', valorCusto: 500, quantidade:1, valorVenda: 100000000, lucro:0.6, image:'https://static.wixstatic.com/media/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.png/v1/fill/w_492,h_781,fp_0.50_0.50,q_95/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.webp' },
        { codigo:'003', nome: 'calcinha', valorCusto: 500, quantidade:1, valorVenda: 1000, lucro:0.6, image:'https://static.wixstatic.com/media/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.png/v1/fill/w_492,h_781,fp_0.50_0.50,q_95/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.webp' },
        { codigo:'004', nome: 'calcinha', valorCusto: 500, quantidade:1, valorVenda: 1000, lucro:0.6, image:'https://static.wixstatic.com/media/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.png/v1/fill/w_492,h_781,fp_0.50_0.50,q_95/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.webp' },
        { codigo:'005', nome: 'calcinha', valorCusto: 500, quantidade:1, valorVenda: 1000, lucro:0.6, image:'https://static.wixstatic.com/media/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.png/v1/fill/w_492,h_781,fp_0.50_0.50,q_95/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.webp' },
        { codigo:'006', nome: 'calcinha', valorCusto: 500, quantidade:1, valorVenda: 1000, lucro:0.6, image:'https://static.wixstatic.com/media/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.png/v1/fill/w_492,h_781,fp_0.50_0.50,q_95/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.webp' },
        { codigo:'007', nome: 'calcinha', valorCusto: 500, quantidade:1, valorVenda: 1000, lucro:0.6, image:'https://static.wixstatic.com/media/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.png/v1/fill/w_492,h_781,fp_0.50_0.50,q_95/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.webp' },
        { codigo:'008', nome: 'calcinha', valorCusto: 500, quantidade:1, valorVenda: 1000, lucro:0.6, image:'https://static.wixstatic.com/media/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.png/v1/fill/w_492,h_781,fp_0.50_0.50,q_95/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.webp' },
        { codigo:'009', nome: 'calcinha', valorCusto: 500, quantidade:1, valorVenda: 1000, lucro:0.6, image:'https://static.wixstatic.com/media/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.png/v1/fill/w_492,h_781,fp_0.50_0.50,q_95/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.webp' },
        { codigo:'010', nome: 'calcinha', valorCusto: 500, quantidade:1, valorVenda: 1000, lucro:0.6, image:'https://static.wixstatic.com/media/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.png/v1/fill/w_492,h_781,fp_0.50_0.50,q_95/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.webp' },
        { codigo:'011', nome: 'calcinha', valorCusto: 500, quantidade:1, valorVenda: 1000, lucro:0.6, image:'https://static.wixstatic.com/media/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.png/v1/fill/w_492,h_781,fp_0.50_0.50,q_95/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.webp' },
        { codigo:'012', nome: 'calcinha', valorCusto: 500, quantidade:1, valorVenda: 1000, lucro:0.6, image:'https://static.wixstatic.com/media/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.png/v1/fill/w_492,h_781,fp_0.50_0.50,q_95/23a180_9981cdb0f57a42b3998f08c766be9218~mv2.webp' },

    ]
};

const styles = {
    ScrollView:{
     marginBottom: 60,
    }
}

export default function Produtos() {

    let [search, setSearch] = useState('');

    function onChangeSearch(value){
        setSearch(value)
    }

    function FilterProducts(search){
        if(!search){
			return mocked.produtos;
        }

        return mocked.produtos.filter(item=> item.codigo === search);
    }

    function Produtos() {
        const produtos = FilterProducts(search)
        return produtos.map((produto, index) => (
            <Products
                key={index}
                codigo={produto.codigo}
                nome={produto.nome}
                valorCusto={produto.valorCusto}
                quantidade={produto.quantidade}
                valorVenda={produto.valorVenda}
                lucro={produto.lucro}
                image={produto.image}
            />
        ));
    }

    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={search}
            />
            <ScrollView style={styles.ScrollView}>
                {Produtos()}

            </ScrollView>
        </View>
    );
}