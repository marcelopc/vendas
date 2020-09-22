import React, { useRef, useState, useEffect } from 'react';
import { View } from 'react-native';

import { FormatarStringReaisToCents } from '../../util/money';
import { Button, TextInput } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text'
import Picker from '../Picker';

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
	view: {
		paddingLeft: 5,
		paddingRight: 5
	},

}
export default function Products(props) {

	let [nome, setNome] = useState('');

	function submit() {

		let retorno = {}

		props.onSubmit(retorno);
		clearInputs();
	}


	return (
		<View style={style.view}>

			<Picker
				value={nome}
				onValueChange={(itemValue) => setNome(itemValue)}
				items={[
					{ label: 'Football', value: 'football' },
					{ label: ' Baseball ', value: ' baseball ' },
					{ label: 'Hóquei', value: 'hóquei' },
				]}

			/>


			<Button mode="contained" onPress={submit}>Adicionar</Button>
		</View>);
}