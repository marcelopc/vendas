import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import AddProdutos from '../AddProdutos';
import AddConjuntos from '../AddConjuntos';

const styles = StyleSheet.create({
	scene: {
		flex: 1,
		marginTop: 5
	},
});


const initialLayout = { width: Dimensions.get('window').width };

export default function Add() {

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'first', title: 'Peças' },
		{ key: 'second', title: 'Conjuntos' },
	]);

	const FirstRoute = () => (
		<View style={styles.scene}>
			<AddProdutos />
		</View>);

	const SecondRoute = () => (
		<View style={styles.scene}>
			<AddConjuntos/>
		</View>
	);

	const renderScene = SceneMap({
		first: FirstRoute,
		second: SecondRoute,
	});


	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={initialLayout}
		/>
	);
}