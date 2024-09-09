import {StyleSheet} from 'react-native';
import {colors, widthPixel} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 16,
    marginTop: -30,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  wrapper1: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 10,
    gap: 15,
  },
});
