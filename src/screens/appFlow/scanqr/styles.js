import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qr: {
    width: widthPixel(250),
    height: heightPixel(250),
    resizeMode: 'contain',
  },
  textmain: {
    flex: 2,
    width: widthPixel(300),
    height: heightPixel(40),
  },
  t1: {
    color: colors.mediumblack,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.8),
    textAlign: 'center',
  },
});
