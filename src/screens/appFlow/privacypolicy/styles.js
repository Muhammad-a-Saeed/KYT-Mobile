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
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: fontFamily.appTextRegular,
    color: colors.lightBlack,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: fontFamily.appTextRegular,
    color: colors.lightBlack,
    marginBottom: 20,
  },
});
