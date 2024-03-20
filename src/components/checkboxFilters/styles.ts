import {StyleSheet} from 'react-native';
import sharedStyles from '../../utils/sharedStyles';
import {scale} from 'react-native-size-matters';

const styles = () => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: scale(5),
    },
    font: {
      ...sharedStyles.font,
      textAlignVertical: 'center',
    },
  });
};

export default styles;
