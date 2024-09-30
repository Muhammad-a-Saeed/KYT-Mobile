import {StatusBar, StyleSheet} from 'react-native';
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
    zIndex: 1,
    flex: 1,
    padding: heightPixel(20),
    marginTop: 10,
    // alignItems: 'center',
    // backgroundColor: colors.errorColor,
    justifyContent: 'center',
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
    alignItems: 'center',
    paddingVertical: heightPixel(180),
  },
});
