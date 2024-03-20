import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../screens/home';
import {ROUTE_HOME} from './routes';

export type RootStackParamList = {
	Home: undefined;
	Logo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={ROUTE_HOME} screenOptions={{headerShown: false}}>
				<Stack.Screen name={ROUTE_HOME} component={HomePage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
