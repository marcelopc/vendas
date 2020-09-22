import React, { useRef, useState, useEffect } from 'react';
import { View} from 'react-native';

import { FormatarStringReaisToCents } from '../../util/money';
import { Button, TextInput } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text'

const style={
	inputs:{
		marginBottom: 10
	},
	view:{
		paddingLeft: 5,
		paddingRight: 5
	}
}
export default function Products(props) {

	let [codigo, setCodigo] = useState('');
	let [nome, setNome] = useState('');
	let [valorCusto, setValorCusto] = useState('');
	let [quantidade, setValorQuantidade] = useState('');
	let [valorVenda, setValorVenda] = useState('');
	let [lucro, setLucro] = useState('');


	function calcLucro(value) {
		const venda = parseInt(value);
		const custo = parseInt(valorCusto);

		const lucro = ((venda - custo) / venda) * 100;

		return lucro ? lucro.toFixed(2).toString() : '0';
	}

	function calcValorVenda(value) {
		const custo = parseInt(valorCusto);
		const lucro = parseInt(value);
		const venda = custo / (1 - (lucro / 100));

		return venda ? venda.toFixed(2).toString() : '0';
	}

	function isMoney(value){
		return /^[R$]/g.test(value);
	}

	function handleChange(key, value) {

		if(isMoney(value)){
			value = FormatarStringReaisToCents(value);
		}

		let sets = {
			codigo: setCodigo,
			nome: setNome,
			valorCusto: setValorCusto,
			quantidade: setValorQuantidade,
			valorVenda: setValorVenda,
			lucro: setLucro,
		};

		if (key === 'valorVenda') {
			sets.lucro(calcLucro(value));
		}

		if (key === 'lucro') {
			sets.valorVenda(calcValorVenda(value));
		}

		return sets[key](value);
	}

	function submit(){

		let retorno = {
			codigo,
			nome,
			valorCusto: valorCusto,
			quantidade,
			valorVenda: valorVenda,
			lucro
		}

		props.onSubmit(retorno);
		clearInputs();
	}

	function clearInputs(){
		setCodigo('');
		setNome('');
		setValorCusto('');
		setValorQuantidade('');
		setValorVenda('');
		setLucro('');
	}

	return (
		<View style={style.view}>
			<TextInput
				style={style.inputs}
				mode="outlined"
				label="Código"
				value={codigo}
				onChangeText={(text) => handleChange('codigo', text)}
			/>

			<TextInput
				style={style.inputs}
				mode="outlined"
				label="Nome"
				value={nome}
				onChangeText={(text) => handleChange('nome', text)}
			/>

			<TextInput
				style={style.inputs}
				mode="outlined"
				label="Custo"
				value={valorCusto}
				onChangeText={(text) => handleChange('valorCusto', text)}
				keyboardType="numeric"
				autoCapitalize="none"
				render={(props)=><TextInputMask {...props} type="money"/>}

			/>

			<TextInput
				style={style.inputs}
				mode="outlined"
				label="Quantidade"
				value={quantidade}
				onChangeText={(text) => handleChange('quantidade', text)}
				keyboardType="numeric"
			/>

			<TextInput
				style={style.inputs}
				mode="outlined"
				label="Valor de venda"
				value={valorVenda}
				onChangeText={(text) => handleChange('valorVenda', text)}
				keyboardType="numeric"
				autoCapitalize="none"
				render={(props)=><TextInputMask {...props} type="money"/>}

			/>

			<TextInput
				style={style.inputs}
				mode="outlined"
				label="Lucro"
				value={lucro}
				onChangeText={(text) => handleChange('lucro', text)}
				keyboardType="numeric"
			/>

			<Button mode="contained" onPress={submit}>Adicionar</Button>
		</View>);
}