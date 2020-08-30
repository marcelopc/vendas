import {LocaleString} from './LocaleString';

export const FormatarCentavosParaReais = (valor)=>{
	if(!valor)
		return '0,00';
	let total = valor / 100;

	return LocaleString(total, 'pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2});

};

export default {
	FormatarCentavosParaReais,
};
