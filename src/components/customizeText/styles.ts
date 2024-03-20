import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import sharedStyles from '../../utils/sharedStyles';
import theme from '../../utils/theme';

const styles = () => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
    },
    headingH2: {
      ...sharedStyles.font,
      fontWeight: '600',
    },
    underlinedText: {
      borderBottomColor: theme.colors.primary[1],
      borderBottomWidth: verticalScale(4),
    },
  });
};

export default styles;
