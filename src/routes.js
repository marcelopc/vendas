import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import './config/ReactotronConfig';

import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Vendas from './pages/Vendas';
import Graficos from './pages/Graficos';
import Add from './pages/Add';

const Tab = createBottomTabNavigator();

const styles = {
	add:{
		position:"relative",
		top:7
	}
}
function Routes() {
	return (
		<Tab.Navigator >
			<Tab.Screen name="Home" component={Home}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color, size }) => (
						<Icon name="home" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen name="Produtos" component={Produtos}
				options={{
					tabBarLabel: 'Produtos',
					tabBarIcon: ({ color, size }) => (
						<Icon name="basket-fill" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen name="add" component={Add}
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ color, size}) => (
						<Icon name="plus-box" size={40} color={color} style={styles.add}/>
					),
				}}
			/>
			<Tab.Screen name="Vendas" component={Vendas}
				options={{
					tabBarLabel: 'Vendas',
					tabBarIcon: ({ color, size }) => (
						<Icon name="sale" size={size} color={color} />
					),
				}}
			/>

			<Tab.Screen name="Graficos" component={Graficos}
				options={{
					tabBarLabel: 'Graficos',
					tabBarIcon: ({ color, size }) => (
						<Icon name="chart-areaspline" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default Routes;


