import {scale, verticalScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import theme from '../../utils/theme/index';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/constants';
import sharedStyles from '../../utils/sharedStyles';

const styles = (password: string | null) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary[2],
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    },
    headingH1: {
      ...sharedStyles.font,
      marginVertical: verticalScale(30),
      textAlign: 'center',
      marginHorizontal: scale(20),
    },
    display: {
      alignItems: 'center',
      backgroundColor: theme.colors.primary.white,
      borderBottomColor: theme.colors.primary[1],
      borderBottomWidth: verticalScale(8),
      display: 'flex',
      flexDirection: 'row',
      height: verticalScale(70),
      justifyContent: 'space-between',
      marginHorizontal: scale(20),
      paddingHorizontal: scale(20),
    },
    displayText: {
      color: theme.colors.primary.black,
      fontSize: scale(20),
    },
    button: {
      alignSelf: 'center',
      backgroundColor:
        password !== null
          ? theme.colors.primary[1]
          : theme.colors.primary.disabled,
      borderRadius: 10,
      elevation: 5,
      marginVertical: verticalScale(30),
      paddingHorizontal: scale(40),
      paddingVertical: verticalScale(10),
      shadowColor: theme.colors.primary.black,
      shadowOpacity: 0.25,
    },
    buttonText: {
      ...sharedStyles.font,
      color: theme.colors.primary.white,
      fontWeight: '600',
    },
    inlineComponent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: scale(20),
      marginVertical: verticalScale(10),
    },
    resetButton: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    resetButtonText: {
      ...sharedStyles.font,
      fontSize: scale(12),
      textAlignVertical: 'center',
      marginHorizontal: scale(8),
    },
    checkboxContainer: {
      backgroundColor: theme.colors.primary[2],
      marginHorizontal: scale(20),
      padding: scale(30),
      borderRadius: scale(10),
    },
  });
};

export default styles;
