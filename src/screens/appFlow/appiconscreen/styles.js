import {StatusBar, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // marginTop: StatusBar.currentHeight,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    padding: 10,
    gap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
