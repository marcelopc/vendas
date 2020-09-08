import React, { useRef } from 'react';
import { View, Button, TextInput } from 'react-native';
import { FormatarCentavosParaReais } from '../../util/money';
// import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';

const inputs = {
	codigo:{initValue:'', label:'Código'},
	nome:{initValue:'', label:'Nome'},
	valorCusto:{initValue: 0, label:'Custo'},
	quantidade:{initValue: 0, label:'Quantidade'},
	valorVenda:{initValue: 0, label:'Valor de venda'},
	lucro:{initValue:0, label:'Lucro'}
}

export default function Products(props) {
//TODO:TROCAR PARA O INPUT DO REACT-NATIVE-PAPER
	function CreateInputs(values, handleChange) {

		const inputKeys = Object.keys(inputs);
		return inputKeys.map(key=>{
			return <TextInput
			mode="outlined"
			label={inputs[key].label}
			value={values[key]}
			onChangeText={handleChange(key)}
		/>
		});

	}
	function InitialValues(){
		const inputKeys = Object.keys(inputs);
		let values = {}

		inputKeys.forEach(key =>{
			values = {
				...values,
				[key]:inputs[key].initValue
			}
		});

		return values
	}

	return (
		<Formik
			initialValues={InitialValues}
			onSubmit={values => {props.onSubmit(values)}}
		>
			{
				({values, handleChange, handleSubmit}) => {
					return (<View>
						{CreateInputs(values, handleChange)}
					<Button title="submit" onPress={handleSubmit}/>
				</View>)}
			}
		</Formik>);
}