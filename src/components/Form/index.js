import React, { useRef, useState, useEffect } from 'react';
import { View,} from 'react-native';

import { FormatarStringReaisToCents } from '../../util/money';
import { TextInput, Button} from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text'
//TODO:fazer o teclado passar por cima da aplicação
export default function Products(props) {

	let [codigo, setCodigo] = useState('');
	let [nome, setNome] = useState('');
	let [valorCusto, setValorCusto] = useState('0');
	let [quantidade, setValorQuantidade] = useState('0');
	let [valorVenda, setValorVenda] = useState('0');
	let [lucro, setLucro] = useState('');


	function CalcLucro(value){
		const venda = parseInt(value);
		const custo = parseInt(valorCusto);

		const lucro = ((venda - custo)/venda)*100;

		return lucro ? lucro.toFixed(2).toString() : '0';
	}

	function CalcValorVenda(value){
		const custo = parseInt(valorCusto);
		const lucro = parseInt(value);
		const venda = custo/(1-(lucro/100));
 
		return venda ? venda.toFixed(2).toString() : '0';
	}

	function handleChange(key, value){
		let sets = {
			codigo: setCodigo,
			nome: setNome,
			valorCusto: setValorCusto,
			quantidade: setValorQuantidade,
			valorVenda: setValorVenda,
			lucro: setLucro,
		};

		if(key === 'valorVenda'){
			sets.lucro(CalcLucro(value));
		}

		if(key === 'lucro'){
			sets.valorVenda(CalcValorVenda(value));
		}

		return sets[key](value);
	}

	return (
	<View>
		<TextInput
			mode="outlined"
			label="Código"
			value={codigo}
			onChangeText={(text)=>handleChange('codigo', text)}
		/>

		<TextInput
			mode="outlined"
			label="Nome"
			value={nome}
			onChangeText={(text)=>handleChange('nome', text)}
		/>

		<TextInput
			mode="outlined"
			label="Custo"
			value={valorCusto}
			onChangeText={(text)=>handleChange('valorCusto', text)}
			keyboardType="numeric"
			autoCapitalize="none"
			// render={(props)=><TextInputMask {...props} type="money"/>}

		/>

		<TextInput
			mode="outlined"
			label="Quantidade"
			value={quantidade}
			onChangeText={(text)=>handleChange('quantidade', text)}
			keyboardType="numeric"
		/>

		<TextInput
			mode="outlined"
			label="Valor de venda"
			value={valorVenda}
			onChangeText={(text)=>handleChange('valorVenda', text)}
			keyboardType="numeric"
			autoCapitalize="none"
			// render={(props)=><TextInputMask {...props} type="money"/>}

		/>

		<TextInput
			mode="outlined"
			label="Lucro"
			value={lucro}
			onChangeText={(text)=>handleChange('lucro', text)}
			keyboardType="numeric"
		/>
		<Button  mode="contained">SUBMIT</Button>
	</View>);
}