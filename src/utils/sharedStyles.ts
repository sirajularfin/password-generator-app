import {StyleSheet} from 'react-native';
import theme from './theme';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
	font: {
		color: theme.colors.primary.black,
		fontSize: scale(14),
	},
});

export default styles;
