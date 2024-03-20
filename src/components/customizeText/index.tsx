import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export interface IUnderlineTextProps {
	text: string;
	underlineText: string;
}

const CustomizeText = (props: IUnderlineTextProps) => {
	const classes = styles();
	return (
		<View style={classes.container}>
			<View>
				<Text style={classes.headingH2}>{props.text}</Text>
			</View>
			<View style={classes.underlinedText}>
				<Text style={classes.headingH2}>{props.underlineText}</Text>
			</View>
		</View>
	);
};

export default CustomizeText;
