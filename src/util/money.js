import {LocaleString} from './LocaleString';
import { number } from 'yup';

export const FormatarCentavosParaReais = (valor)=>{
	if(!valor)
		return 'R$ 0,00';
	let total = valor / 100;

	return LocaleString(total, 'pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2});

};

export const FormatarStringReaisToCents = (valor)=>{

	valor = valor.split('R$')[1];
	valor = valor.replace(',', '');

	return valor/100;
};


export default {
	FormatarCentavosParaReais,
	FormatarStringReaisToCents
};
