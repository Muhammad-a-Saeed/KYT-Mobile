import {StatusBar, StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // marginTop: StatusBar.currentHeight,
  },
  fg1: {
    flexGrow: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  pv30: {
    flex: 0.2,
    alignItems: 'center',
  },
  addrescard: {
    marginTop: 10,
    gap: 15,
  },
});
