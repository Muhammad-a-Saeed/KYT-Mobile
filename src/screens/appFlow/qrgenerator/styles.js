import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  qr: {
    width: widthPixel(280),
    height: heightPixel(280),
    resizeMode: 'contain',
  },
  textmain: {
    width: widthPixel(300),
    height: heightPixel(40),
    // backgroundColor: 'red',
  },
  t1: {
    color: colors.mediumblack,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.7),
    textAlign: 'center',
  },
});
