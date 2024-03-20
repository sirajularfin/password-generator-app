import React from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import theme from '../../utils/theme';

/**
 * Props for the CheckBoxFilters component.
 */
interface ICheckBoxFiltersProps {
  text: string;
  checkboxValue: boolean;
  onCheckboxValueChange: (checked: boolean) => void;
}

/**
 * CheckboxFilters component.
 * @param {ICheckBoxFiltersProps} props - The props for the CheckboxFilters component.
 * @returns {JSX.Element} The rendered CheckboxFilters component.
 */
const CheckboxFilters = (props: ICheckBoxFiltersProps) => {
  const classes = styles();
  return (
    <View style={classes.container}>
      <Text style={classes.font}>{props.text}</Text>
      <CheckBox
        tintColors={{
          true: theme.colors.primary[1],
          false: theme.colors.primary.black,
        }}
        value={props.checkboxValue}
        onValueChange={props.onCheckboxValueChange}
      />
    </View>
  );
};

export default CheckboxFilters;
