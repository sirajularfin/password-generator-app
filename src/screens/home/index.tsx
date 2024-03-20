import React, {useEffect} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';
import usePasswordGenerator from './usePasswordGenerator';
import CustomizeText from '../../components/customizeText';
import CheckboxFilters from '../../components/checkboxFilters';
import TextInputFilters from '../../components/textInputFilters';
import {Svg, SvgXml} from 'react-native-svg';
import {resetIcon} from '../../assets/icons/reset';
import {editIcon} from '../../assets/icons/edit';
import {copyToClipboard} from '../../utils/functions';

const HomePage = () => {
  const {
    errorMessage,
    handleReset,
    password,
    passwordFilters,
    setPasswordFilters,
  } = usePasswordGenerator();
  const classes = styles();
  console.log(passwordFilters);
  return (
    <ScrollView style={classes.container}>
      <Text style={classes.headingH1}>
        Generate a secure, random and customized password.
      </Text>
      <View style={classes.display}>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={classes.displayText}>
          {password}
        </Text>
        <Pressable onPress={() => console.log('Hello World')}>
          <SvgXml xml={editIcon} width="20" height="20" />
        </Pressable>
      </View>
      <Pressable
        style={classes.button}
        onPress={() => {
          typeof password === 'string' && copyToClipboard(password);
        }}>
        <Text style={classes.buttonText}>Copy Password</Text>
      </Pressable>
      <View style={classes.inlineComponent}>
        <CustomizeText text="Customize Your Pass" underlineText="word" />
        <Pressable style={classes.resetButton} onPress={() => handleReset()}>
          <Text style={classes.resetButtonText}>Reset</Text>
          <SvgXml xml={resetIcon} width="15" height="15" />
        </Pressable>
      </View>
      <TextInputFilters
        text="Password Length"
        onChange={(text: number) =>
          setPasswordFilters({...passwordFilters, passwordLength: text})
        }
        value={passwordFilters.passwordLength?.toString()}
      />
      <View style={classes.checkboxContainer}>
        <CheckboxFilters
          text="Include Numbers"
          checkboxValue={passwordFilters.includeNumbers}
          onCheckboxValueChange={(checked: boolean) =>
            setPasswordFilters({...passwordFilters, includeNumbers: checked})
          }
        />
        <CheckboxFilters
          text="Special Characters"
          checkboxValue={passwordFilters.includeSymbols}
          onCheckboxValueChange={(checked: boolean) =>
            setPasswordFilters({...passwordFilters, includeSymbols: checked})
          }
        />
        <CheckboxFilters
          text="Lowercase Letters"
          checkboxValue={passwordFilters.includeLowercase}
          onCheckboxValueChange={(checked: boolean) =>
            setPasswordFilters({...passwordFilters, includeLowercase: checked})
          }
        />
        <CheckboxFilters
          text="Uppercase Letters"
          checkboxValue={passwordFilters.includeUppercase}
          onCheckboxValueChange={(checked: boolean) =>
            setPasswordFilters({...passwordFilters, includeUppercase: checked})
          }
        />
      </View>
      <TextInputFilters
        text="How many digits?"
        onChange={() => console.log('Hello World')}
      />
      <TextInputFilters
        text="How many special characters?"
        onChange={() => console.log('Hello World')}
      />
    </ScrollView>
  );
};

export default HomePage;
