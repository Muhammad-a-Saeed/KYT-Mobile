import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  fg1: {
    flexGrow: 1,
  },
  wrapper: {
    flex: 1,
    paddingBottom: heightPixel(20),
    // backgroundColor: colors.errorColor,
    justifyContent: 'flex-end',
  },

  etext: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    color: colors.lightText,
  },

  title: {
    fontSize: 20,
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextBold,
  },
  forgetcontainer: {
    alignItems: 'flex-end',
  },

  pv30: {
    // flex: 1,
    paddingVertical: heightPixel(180),
  },
});
