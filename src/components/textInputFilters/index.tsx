import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';

interface ITextInputFiltersProps {
  text: string;
  onChange: any;
  value: string | undefined;
}

const TextInputFilters = (props: ITextInputFiltersProps) => {
  const classes = styles();
  return (
    <View style={classes.container}>
      <Text style={classes.font}>{props.text}</Text>
      <TextInput
        keyboardType="numeric"
        onChangeText={props.onChange}
        style={classes.textInput}
        value={props.value}
      />
    </View>
  );
};

export default TextInputFilters;
