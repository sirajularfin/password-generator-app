import {StyleSheet} from 'react-native';
import sharedStyles from '../../utils/sharedStyles';
import {scale, verticalScale} from 'react-native-size-matters';
import theme from '../../utils/theme';

const styles = () => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: scale(20),
      marginVertical: verticalScale(10),
    },
    font: {
      ...sharedStyles.font,
      textAlignVertical: 'center',
    },
    textInput: {
      backgroundColor: theme.colors.primary.white,
      borderRadius: 10,
      color: theme.colors.primary.black,
      elevation: 5,
      height: verticalScale(40),
      paddingHorizontal: scale(20),
      paddingVertical: verticalScale(10),
      shadowColor: theme.colors.primary.black,
      shadowOpacity: 0.25,
      width: scale(50),
      padding: scale(0),
      fontSize: scale(10),
    },
  });
};

export default styles;
