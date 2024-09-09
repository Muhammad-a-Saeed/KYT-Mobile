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
    // alignSelf: 'center',
    borderRadius: 16,
    marginTop: -30,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  listContainer: {
    flex: 1,
    margin: 10,
    gap: 10, // Optional: Gap between items
    // backgroundColor: colors.errorColor,
  },
});
