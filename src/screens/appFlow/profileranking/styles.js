import {StyleSheet} from 'react-native';
import {colors, heightPixel, widthPixel} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    width: '100%',
    borderRadius: 16,
    marginTop: -30,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  listContainer: {
    alignItems: 'center',
    padding: 10,
    gap: 20,
    marginTop: 20,
  },
  bottomSection: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: heightPixel(120),
    backgroundColor: colors.greendark,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
});
